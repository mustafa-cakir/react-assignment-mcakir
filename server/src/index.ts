import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import { errorHandler } from "./global/middleware/errorHandler";
import { notFoundHandler } from "./global/middleware/notFoundHandler";
import { userRouter } from "./user/userRouter";
import { deviceRouter } from "./device/deviceRouter";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(helmet());
app.use("*", cors());
app.use(express.json());
app.use("/devices", deviceRouter);
app.use("/login", userRouter);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  return console.log(`server is listening on ${PORT}`);
});
