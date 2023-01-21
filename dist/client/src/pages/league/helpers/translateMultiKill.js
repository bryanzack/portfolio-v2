"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateMultiKill = void 0;
const translateMultiKill = (multikill) => {
    switch (multikill) {
        case 2:
            return 'Double Kill';
        case 3:
            return 'Triple Kill';
        case 4:
            return 'Quadra Kill';
        case 5:
            return 'Penta Kill';
    }
};
exports.translateMultiKill = translateMultiKill;
