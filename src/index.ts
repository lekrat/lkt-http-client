import {LktHttpMixin} from "./mixins/LktHttpMixin";
import {ILktObject} from "lkt-tools";
import {createHTTPEnvironment} from "./functions/startup-functions";

export {
    createHTTPGetResource,
    createHTTPPostResource,
    createHTTPPutResource,
    createHTTPDeleteResource,
    createHTTPDownloadResource,
    createHTTPOpenResource,
    createHTTPEnvironment,
    getHTTPResource,
    getHTTPEnvironment,
} from "./functions/startup-functions";

export {$http} from "./functions/http-functions";

export {existsHTTPResource} from "./functions/helpers";

const LktHttp = {
    install: (app: any, options: ILktObject) => {
        app.mixin(LktHttpMixin);
        createHTTPEnvironment('default', '');
        //@ts-ignore
        window.download = require("downloadjs");
    },
};

export default LktHttp;