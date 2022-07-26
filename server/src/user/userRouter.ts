import express, { Request, Response } from "express";
import { createToken } from "../global/security/tokenService";

export const userRouter = express.Router();
import * as UserService from "./userService";

import { User } from "./userType";

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const userReq: User = req.body;
    const user = await UserService.find(userReq.name, userReq.password);

    if (user) {
      const userToken = createToken(user.id);
      return res.status(200).send(userToken);
    }
    return res.status(404).send("User not found");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
