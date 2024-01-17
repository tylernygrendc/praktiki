import { autoResizeTextArea, enableNavigation, enableTabs } from "./_ui.js";

window.addEventListener("load", () => {
    autoResizeTextArea();
    enableNavigation();
    enableTabs();
})