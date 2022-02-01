const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Greetings!</title></head>");
    res.write(
      '<body><h2>Greetings! User, welcome to our page!</h2><form action="/create-user" method="POST"><input type="text" placeholder="Enter username" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title> Greetings!</title></head>");
    res.write(
      "<body><ul><li>User</li><li>User 2 </li><li>User 3 </li></ul></body>"
    );
    return res.write("</html>");
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", function (dt) {
      console.log(dt);
      body.push(dt);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const msg = parsedBody.split("=")[1];
      console.log(msg);

      fs.writeFile("user.txt", msg, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

server.listen(5500);
