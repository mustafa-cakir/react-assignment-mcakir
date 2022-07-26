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
exports.findById = exports.find = void 0;
const mockUser_1 = require("./mockUser");
const find = (name, password) => __awaiter(void 0, void 0, void 0, function* () {
    return mockUser_1.userDB.find((user) => user.name === name && user.password === password);
});
exports.find = find;
const findById = (userId) => __awaiter(void 0, void 0, void 0, function* () { return mockUser_1.userDB.find((user) => user.id === userId); });
exports.findById = findById;
//# sourceMappingURL=userService.js.map