export interface Token {
  id: string;
  expiresIn: number;
}

export interface JWTBody {
  id: string;
  iat: string;
  exp: string;
}

export interface RequestWithUser extends Request {
  jwtBody: JWTBody;
}
