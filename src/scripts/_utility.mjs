export function enableTabs(){
    document.querySelectorAll(".tabs").forEach(element => {
        element.querySelectorAll("[role='tab']").forEach(tab => {
            tab.addEventListener("click", function () {
                let tablist = element.querySelector(`[role="tablist"]`),
                    tabpanel = element.querySelectorAll(`[role="tabpanel"]`);
                
                tablist.querySelectorAll(`[role="tab"]`).forEach((child, i) => {
                    if(child === this){
                        child.ariaSelected = true;
                        tabpanel[i].classList.remove("hidden");
                    } else {
                        child.ariaSelected = false;
                        tabpanel[i].classList.add("hidden");
                    }
                });
            });
        });
    });
}