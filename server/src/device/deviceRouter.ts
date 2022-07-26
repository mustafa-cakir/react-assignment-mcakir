import express, { Response } from "express";
import { authMiddleware } from "../global/security/tokenService";
import { RequestWithUser } from "../global/security/tokenType";

export const deviceRouter = express.Router();
import * as DeviceService from "./deviceService";
import * as UserService from "../user/userService";
import { Device } from "./deviceType";
import { isDeviceMiddleware } from "./deviceService";

// @ts-ignore
deviceRouter.use("/", authMiddleware);

// @ts-ignore
deviceRouter.get("/", async (req: RequestWithUser, res: Response) => {
  try {
    const user = await UserService.findById(Number(req.jwtBody.id));
    const devices: Device[] = await DeviceService.findAll(user.deviceIds);
    return res.status(200).send(devices);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

// @ts-ignore
deviceRouter.get("/:id", async (req: RequestWithUser, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const user = await UserService.findById(Number(req.jwtBody.id));
    if (user.deviceIds.includes(id)) {
      const found: Device = await DeviceService.find(id);
      if (found) {
        return res.status(200).send(found);
      }
    }

    return res.status(404).send("Device not found");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

deviceRouter.put(
  "/:id",
  isDeviceMiddleware,
  async (req: RequestWithUser, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
      const user = await UserService.findById(Number(req.jwtBody.id));

      if (user.deviceIds.includes(id)) {
        const found: Device = await DeviceService.find(id);
        if (found) {
          const reqDevice: Device = req.body;
          console.log(`reqDevice`, reqDevice);
          const deviceUpdate: Device = DeviceService.updateDevice(
            reqDevice,
            found
          );
          console.log(`deviceUpdate`, deviceUpdate);
          return res.status(201).json(deviceUpdate);
        }
      }
      return res.status(404).send("Device not found");
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);

deviceRouter.post(
  "/",
  isDeviceMiddleware,
  async (req: RequestWithUser, res: Response) => {
    try {
      const user = await UserService.findById(Number(req.jwtBody.id));
      if (user) {
        const reqDevice: Device = req.body;
        const postDevice = DeviceService.createCat(reqDevice);

        user.deviceIds.push(postDevice.id);
        return res.status(201).json(postDevice);
      }
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);

deviceRouter.delete(
  "/:id",
  async (req: RequestWithUser, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const user = await UserService.findById(Number(req.jwtBody.id));
      if (user.deviceIds.includes(id)) {
        await DeviceService.remove(id);
        user.deviceIds.splice(user.deviceIds.indexOf(id), 1);
        return res.status(200).send({ id });
      }

      return res.status(404).send("Device not found");
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);
