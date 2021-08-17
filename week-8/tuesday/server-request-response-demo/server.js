const http = require("http");
const fs = require("fs");

let database = [];

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    if (req.method === "GET" && req.url === "/") {
        const htmlPage = fs.readFileSync("index.html", "utf-8");
        const tasksList = database.map(task => {
            return `<li>${task["tasks"]} - ${task["time"]}</li>`
        });
        // "<li>reading1 - 9:06</li>"
        const resBody = htmlPage.replace("${tasks}", tasksList.join(""))
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(resBody);
    }

    if (req.method === "GET" && req.url === "/main.css") {
        const resBody = fs.readFileSync("main.css");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        return res.end(resBody);
    }

    let reqBody = "";
    req.on("data", data => {
        reqBody += data;
    });

    req.on("end", () => {
        console.log(reqBody);
        if (reqBody) {
            /*
            tasks=reading+1&time=09%3A06
            ["tasks=reading+1", "time=09%3A06"]
            [["tasks", "reading+1"], ["time", "09%3A06"]]
            [["tasks", "reading 1"], ["time", "09%3A06"]]
            [["tasks", "reading 1"], ["time", "09:06"]]
            {
                tasks: "reading 1",
                time: "09:06"
            }
            */
            req.body = reqBody
                .split("&")
                .map(keyValuePair => keyValuePair.split("="))
                .map(([key, value]) => [key, value.replace("+", " ")])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});

        }
        if (req.method === "POST" && req.url === "/tasks") {
            console.log(req.body);
            database.push(req.body);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        }
    });

});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));

