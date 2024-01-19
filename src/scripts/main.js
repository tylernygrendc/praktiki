import { autoResizeTextArea, enableNavigation, enableTabs } from "../script_modules/_ui.mjs";

window.addEventListener("load", () => {
    autoResizeTextArea();
    enableNavigation();
    enableTabs();
})