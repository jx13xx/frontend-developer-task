/**
 *  Asynchronolusly loads the Registration Page
 */

import loadable from "../../utils/loadable";
export default loadable(() => import("./index"));
