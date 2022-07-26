"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deviceRouter = void 0;
const express_1 = __importDefault(require("express"));
const tokenService_1 = require("../global/security/tokenService");
exports.deviceRouter = express_1.default.Router();
const DeviceService = __importStar(require("./deviceService"));
const UserService = __importStar(require("../user/userService"));
const deviceService_1 = require("./deviceService");
// @ts-ignore
exports.deviceRouter.use("/", tokenService_1.authMiddleware);
// @ts-ignore
exports.deviceRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserService.findById(Number(req.jwtBody.id));
        const devices = yield DeviceService.findAll(user.deviceIds);
        return res.status(200).send(devices);
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
}));
// @ts-ignore
exports.deviceRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const user = yield UserService.findById(Number(req.jwtBody.id));
        if (user.deviceIds.includes(id)) {
            const found = yield DeviceService.find(id);
            if (found) {
                return res.status(200).send(found);
            }
        }
        return res.status(404).send("Device not found");
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
}));
exports.deviceRouter.put("/:id", deviceService_1.isDeviceMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const user = yield UserService.findById(Number(req.jwtBody.id));
        if (user.deviceIds.includes(id)) {
            const found = yield DeviceService.find(id);
            if (found) {
                const reqDevice = req.body;
                console.log(`reqDevice`, reqDevice);
                const deviceUpdate = DeviceService.updateDevice(reqDevice, found);
                console.log(`deviceUpdate`, deviceUpdate);
                return res.status(201).json(deviceUpdate);
            }
        }
        return res.status(404).send("Device not found");
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
}));
exports.deviceRouter.post("/", deviceService_1.isDeviceMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserService.findById(Number(req.jwtBody.id));
        if (user) {
            const reqDevice = req.body;
            const postDevice = DeviceService.createCat(reqDevice);
            user.deviceIds.push(postDevice.id);
            return res.status(201).json(postDevice);
        }
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
}));
exports.deviceRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const user = yield UserService.findById(Number(req.jwtBody.id));
        if (user.deviceIds.includes(id)) {
            yield DeviceService.remove(id);
            user.deviceIds.splice(user.deviceIds.indexOf(id), 1);
            return res.status(200).send({ id });
        }
        return res.status(404).send("Device not found");
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
}));
//# sourceMappingURL=deviceRouter.js.map