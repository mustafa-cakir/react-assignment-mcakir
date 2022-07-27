import { Response } from "express";
import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import {
  RequestWithUser,
  Token,
  JWTBody,
} from "../../global/security/tokenType";

export const createToken = (userId: number): Token => {
  const expiresIn = 60 * 60; // an hour

  return {
    id: jwt.sign({ id: String(userId) }, process.env.JWT_SECRET, {
      expiresIn,
    }),
    expiresIn,
  };
};

export const createCookie = (token: Token) => {
  return `Authorization=${token.id}; HttpOnly; Max-Age=${token.expiresIn}`;
};

export const authMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res.status(401).send("Token Error");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, jwtBody: JWTBody) => {
    if (err) {
      return res.status(403).send("User not Authorized");
    } else {
      req.jwtBody = jwtBody;
      return next();
    }
  });
};
