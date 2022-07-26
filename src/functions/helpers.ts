import {ILktObject, mergeObjects} from "lkt-tools";
import {CALL_HTTP_RESOURCE_OPTIONS} from "../constants";

export const paramsToString = (params: ILktObject) => {
    let r = [];
    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            if (Array.isArray(params[key])) {
                if (params[key].length > 0) {
                    r.push(key + '=' + JSON.stringify(params[key]) + '');
                }
            } else {
                r.push(key + '=' + params[key]);
            }
        }
    }

    return r.join('&');
}

/**
 *
 * @param opts
 * @returns {*}
 */
export const prepareHTTPResourceOptions = (opts: ILktObject = {}) => {
    return mergeObjects(CALL_HTTP_RESOURCE_OPTIONS, opts);
}