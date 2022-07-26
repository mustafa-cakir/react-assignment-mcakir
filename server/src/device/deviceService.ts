import { Device } from "./deviceType";
import { Response } from "express";
import { deviceDB } from "./mockDevices";

export const findAll = async (deviceIds: number[]): Promise<Device[]> =>
  deviceDB.filter((device: Device) => deviceIds.includes(device.id));

export const find = async (catId: number): Promise<Device> =>
  deviceDB.find((device: Device) => device.id === catId);

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }
  deviceDB.splice(deviceDB.indexOf(item), 1);
};

export const createCat = (device: Device): Device => {
  const newDevice = {
    ...device,
    id: availableDeviceId(),
  };

  deviceDB.push(newDevice);

  return newDevice;
};

export const updateDevice = (
  updatedDevice: Device,
  currentDevice: Device
): Device => {
  const newDevice = { id: currentDevice.id, ...updatedDevice };

  deviceDB.splice(deviceDB.indexOf(currentDevice), 1);

  deviceDB.push(newDevice);
  return newDevice;
};

export const isDevice = (obj: any): boolean => {
  return obj.title && obj.material && obj.enabled;
};

export const availableDeviceId = (): number => {
  let availableId = deviceDB.length + 1;
  const OccupiedIds: number[] = deviceDB.map(
    (device: Device) => device.id
  );
  for (let i = 1; i < OccupiedIds.length; i++) {
    if (!OccupiedIds.includes(i)) {
      availableId = i;
      break;
    }
  }
  return availableId;
};

export const isDeviceMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (isDevice(req.body)) {
    return next();
  }
  return res.status(403).send("Body doesn't contain device obj");
};
