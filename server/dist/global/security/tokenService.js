"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.createCookie = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (userId) => {
    const expiresIn = 60 * 60; // an hour
    return {
        id: jsonwebtoken_1.default.sign({ id: String(userId) }, process.env.JWT_SECRET, {
            expiresIn,
        }),
        expiresIn,
    };
};
exports.createToken = createToken;
const createCookie = (token) => {
    return `Authorization=${token.id}; HttpOnly; Max-Age=${token.expiresIn}`;
};
exports.createCookie = createCookie;
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null) {
        return res.status(401).send("Token Error");
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, jwtBody) => {
        if (err) {
            return res.status(403).send("User not Authorized");
        }
        else {
            req.jwtBody = jwtBody;
            return next();
        }
    });
});
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=tokenService.js.map