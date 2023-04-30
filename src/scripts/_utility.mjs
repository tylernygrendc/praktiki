export function enableTabs(){

    // enable tabs for all elements with class = "tabs"

    document.querySelectorAll(".tabs").forEach(element => {
        element.querySelectorAll("[role='tab']").forEach(tab => {
            tab.addEventListener("click", function () {
                let tablist = element.querySelector(`[role="tablist"]`),
                    tabpanel = element.querySelectorAll(`[role="tabpanel"]`);
                
                tablist.querySelectorAll(`[role="tab"]`).forEach((child, i) => {
                    if(child === this){
                        child.ariaSelected = true;
                        child.classList.add("selected");
                        tabpanel[i].classList.remove("invisible");
                    } else {
                        child.ariaSelected = false;
                        child.classList.remove("selected");
                        tabpanel[i].classList.add("invisible");
                    }
                });
            });
        });
    });

    // enable tabs that are part of id = "shortcut"

    const shortcut = document.querySelector("#shortcut");

    shortcut.querySelectorAll("[role='tab']").forEach(tab => {

        tab.addEventListener("click", function () {

            let tablist = shortcut.querySelector(`[role="tablist"]`),
                tabpanel = shortcut.querySelectorAll(`[role="tabpanel"]`);
            
            tablist.querySelectorAll(`[role="tab"]`).forEach((child, i) => {
                if(child === this){
                    child.ariaSelected = true;
                    child.classList.add("selected");
                    tabpanel[i].classList.remove("invisible");
                } else {
                    child.ariaSelected = false;
                    child.classList.remove("selected");
                    tabpanel[i].classList.add("invisible");
                }
            });
        });
    });
}