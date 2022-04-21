import app from "./app.js";
import http from "http";


app.set("port", process.env.PORT);
const server = http.createServer(app);
server.on("listening", () => {
    console.log(`listening on : http://localhost:${process.env.PORT}`);
});
server.on("error", (error) => {
    console.log(error);
})
server.listen(process.env.PORT);