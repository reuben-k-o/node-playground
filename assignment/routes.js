const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Enter Message </title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message" placeholder="Enter Message"><button type="submit">Send</button></form></body>'
    );
    return res.write("</html>");
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      //non-blocking
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; //redirecting
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> My First page </title></head>");
  res.write("<body><h1>My First page from node.js server</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

//multiple exports
// module.exports = {
//   handler: requestHandler,
//   sometext: "Doing test in exports",
// };

//alternative
// exports.handler = requestHandler
// exports.sometext = "Doing test in exports"
