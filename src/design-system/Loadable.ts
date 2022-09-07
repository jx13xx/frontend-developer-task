/**
 * Asynchronously loads the design system component
 */

import loadable from "utils/loadable";
export default loadable(() => import("./components"));
