import express, { Application } from "express";

const PORT = 3000;

const app: Application = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Listening on Port : ${PORT}`);
});
