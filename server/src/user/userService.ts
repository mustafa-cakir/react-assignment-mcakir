import { userDB } from "./mockUser";
import { User } from "./userType";

export const find = async (
  name: string,
  password: string
): Promise<User> =>
  userDB.find(
    (user: User) => user.name === name && user.password === password
  );

export const findById = async (userId: number): Promise<User> =>
  userDB.find((user: User) => user.id === userId);
