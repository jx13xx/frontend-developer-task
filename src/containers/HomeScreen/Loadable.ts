/**
 *  Asynchronously load the Home Screen Component
 */
import loadable from "../../utils/loadable";
export default loadable(() => import("./index"));
