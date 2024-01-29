import { autoResizeTextArea, enableNavigation, enableTabs } from "../script_modules/_ui.mjs";
import { setAgendaTop } from "../script_modules/_schedule.mjs"

window.onload = () => {
    autoResizeTextArea();
    enableNavigation();
    enableTabs();
    setAgendaTop();
}