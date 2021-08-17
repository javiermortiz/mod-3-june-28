const http = require('http');
const fs = require("fs");

//!!START SILENT
function getContentType(fileName) {
  // /images/dog.jpg
  const ext = fileName.split(".")[1];
  let contentType = 'text/plain';
  switch (ext) {
    // ext === "jpg" || ext === "jpeg"
    case "jpg":
    case "jpeg":
      contentType = "image/jpeg";
      break;
    case "png":
      contentType = "image/png";
      break;
    case "css":
      contentType = "text/css";
      break;
    default:
      contentType = "text/plain";
      break;
  }
  return contentType;
  // equivalent if-else-if statements:
  // if (ext === 'jpg' || ext === 'jpeg') {
  //   return "image/jpeg";
  // } else if (ext === "png") {
  //   return "image/png"
  // } else {
  //   return "text/plain"
  // }
}
//!!END

const server = http.createServer((req, res) => {
  //!!START
  // Phase 2
  if (req.method === "GET" && req.url.startsWith('/static')) {
    /*
    /static/images/dog.jpg
    ["", "/images/dog.jpg"]
    */
    const assetPath = req.url.split("/static")[1]; // ["", "/images/dog.jpg"] //=> "/images/dog.jpg"
    console.log(assetPath)
    try {
      const resBody = fs.readFileSync("./assets" + assetPath);
      res.statusCode = 200;
      res.setHeader("Content-Type", getContentType(assetPath));
      return res.end(resBody);
      
    } catch {
      console.error("Cannot find asset", assetPath, "in assets folder");
      res.statusCode = 404;
      return res.end();
    }
  }

  // Phase 1
  const resBody = fs.readFileSync("./index.html");
  console.log(resBody);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(resBody);
  //!!END
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));