/**
 *  Asynchronolusly load the Members Page
 */
import loadable from "../../utils/loadable";
export default loadable(() => import("./index"));
