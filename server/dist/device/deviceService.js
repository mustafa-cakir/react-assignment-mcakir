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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDeviceMiddleware = exports.availableDeviceId = exports.isDevice = exports.updateDevice = exports.createCat = exports.remove = exports.find = exports.findAll = void 0;
const mockDevices_1 = require("./mockDevices");
const findAll = (deviceIds) => __awaiter(void 0, void 0, void 0, function* () { return mockDevices_1.deviceDB.filter((device) => deviceIds.includes(device.id)); });
exports.findAll = findAll;
const find = (catId) => __awaiter(void 0, void 0, void 0, function* () { return mockDevices_1.deviceDB.find((device) => device.id === catId); });
exports.find = find;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield (0, exports.find)(id);
    if (!item) {
        return null;
    }
    mockDevices_1.deviceDB.splice(mockDevices_1.deviceDB.indexOf(item), 1);
});
exports.remove = remove;
const createCat = (device) => {
    const newDevice = Object.assign(Object.assign({}, device), { id: (0, exports.availableDeviceId)() });
    mockDevices_1.deviceDB.push(newDevice);
    return newDevice;
};
exports.createCat = createCat;
const updateDevice = (updatedDevice, currentDevice) => {
    const newDevice = Object.assign({ id: currentDevice.id }, updatedDevice);
    mockDevices_1.deviceDB.splice(mockDevices_1.deviceDB.indexOf(currentDevice), 1);
    mockDevices_1.deviceDB.push(newDevice);
    return newDevice;
};
exports.updateDevice = updateDevice;
const isDevice = (obj) => {
    return obj.title && obj.material && obj.enabled;
};
exports.isDevice = isDevice;
const availableDeviceId = () => {
    let availableId = mockDevices_1.deviceDB.length + 1;
    const OccupiedIds = mockDevices_1.deviceDB.map((device) => device.id);
    for (let i = 1; i < OccupiedIds.length; i++) {
        if (!OccupiedIds.includes(i)) {
            availableId = i;
            break;
        }
    }
    return availableId;
};
exports.availableDeviceId = availableDeviceId;
const isDeviceMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, exports.isDevice)(req.body)) {
        return next();
    }
    return res.status(403).send("Body doesn't contain device obj");
});
exports.isDeviceMiddleware = isDeviceMiddleware;
//# sourceMappingURL=deviceService.js.map