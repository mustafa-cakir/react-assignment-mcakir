import { Request } from "express";

export interface User {
  id?: number;
  name: string;
  password: string;
  deviceIds: number[];
}
