import express, { Application, Request, Response } from "express";
import { getRandomSeedServer } from "./getRandomSeedServer";
import { registerSeedServer } from "./registerSeedServer";

const PORT = 3000;

const app: Application = express();
app.use(express.json());

app.post("/register", (req: Request, res: Response) => {
  res.send("Hello from register endpoint");
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port : ${PORT}`);
});

async function onLoad() {
  const randomSeedServer = getRandomSeedServer();
  await registerSeedServer(randomSeedServer);
}

onLoad();
