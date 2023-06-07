import { isArray, isBoolean, isFunction, isNumber, isObject, isString, isTypeSame, isUndef } from "../utils";

function mergeObject(param1: Record<string | number, any>, param2: Record<string | number, any>) {
    let mergeParams = { ...param1 };
    for (let key in param2) {
        if (!isTypeSame(mergeParams[key], param2[key])) {
            mergeParams[key] = param2[key];
        } else if (isObject(mergeParams[key])) {
            mergeParams[key] = mergeObject(mergeParams[key], param2[key]);
        } else if (isArray(mergeParams[key])) {
            mergeParams[key] = [...mergeParams[key], ...param2[key]];
        } else {
            mergeParams[key] = param2[key];
        }
    }
    return mergeParams;
}

export default function useMerge(param1: any, param2: any): any {
    if (!isTypeSame(param1, param2) &&
        !isFunction(param1) && !isFunction(param2)
    ) return param1;
    let _merged, _param1 = param1, _param2 = param2;
    if (isFunction(param1)) {
        _param1 = param1();
    }
    if (isFunction(param2)) {
        _param2 = param2();
    }
    switch (true) {
        case isObject(_param1):
            _merged = mergeObject(_param1, _param2);
            break;

        case isArray(_param1):
            _merged = [..._param1, ..._param2];
            break;

        default:
            _merged = _param2;
            break;
    }
    return _merged;
}