export function autoResizeTextArea(){
    document.querySelectorAll("textarea").forEach(textarea => {

        const fontSize = Number(window.getComputedStyle(textarea)
                .getPropertyValue("font-size").split("p")[0]);
        const initialInputHeight = Number(window.getComputedStyle(textarea)
                .getPropertyValue("height").split("p")[0]);
        let newLines = 0;

        textarea.style.height = `${ initialInputHeight }px`;

        textarea.addEventListener("keydown", function (e){
            let contentWidth = textarea.value.length * 0.625 * fontSize;
            let containerWidth = Number(window.getComputedStyle(textarea)
                .getPropertyValue("width").split("p")[0]);

            if(e.key === "Enter") newLines +=1;
            let spaceUsed = newLines + contentWidth / containerWidth;
            let contentHeight = Math.ceil(spaceUsed) * 1.5 * fontSize;

            if(textarea.style.height.split("p")[0] < contentHeight){
                textarea.style.height = `${ contentHeight }px`;
            }
        });

        textarea.parentElement.addEventListener("mouseover", function(e){
            const bottomBorder = this.getBoundingClientRect().bottom;
            if(e.clientY >= bottomBorder - 32) this.style.cursor = "ns-resize";
            else this.style.cursor = "default";
        });
        textarea.parentElement.addEventListener("mousedown", function(e){
            const bottomBorder = this.getBoundingClientRect().bottom;
            if(e.clientY >= bottomBorder - 32){
                const container = this;
                const controller = new AbortController();
                window.addEventListener("mousemove", function(mouse){
                    const initialHeight = Number(window.getComputedStyle(textarea)
                        .getPropertyValue("height").split("p")[0]);
                    window.requestAnimationFrame(() => {
                        container.style.cursor = "grab";
                        textarea.style.height = `${ mouse.movementY + initialHeight }px`;
                    });
                }, { signal: controller.signal });
                window.addEventListener("mouseup", function(e){
                    container.style.cursor = "default";
                    controller.abort();
                }, { signal: controller.signal });
            }
        });
    });
}
export function enableTabs(){
    document.querySelectorAll(".tabs").forEach(element => {
        element.querySelectorAll(".tab").forEach((tab, i) => {
            tab.addEventListener("click", function(e) {
                e.preventDefault();
                let tabpanel = element.querySelectorAll(".tabpanel");
                element.querySelectorAll(".tab").forEach((tab, j) => {

                    if(i === j) {
                        tab.classList.add("tab--active");
                        tabpanel[j].classList.remove("tabpanel--inactive");
                    }
                    else { 
                        tab.classList.remove("tab--active");
                        tabpanel[j].classList.add("tabpanel--inactive");
                    }
                });
            });
        });
    });
}

export function enableNavigation(){
    document.querySelectorAll(".navigation").forEach(element => {
        element.querySelectorAll(".navigation-item").forEach((item, i) => {
            item.addEventListener("click", function(e) {
                e.preventDefault();
                let layout = document.querySelectorAll(".layout");
                element.querySelectorAll(".navigation-item").forEach((item, j) => {
                    if(i === j) {
                        item.classList.add("navigation-item--active");
                        layout[j].classList.add("layout--active");
                    }
                    else { 
                        item.classList.remove("navigation-item--active");
                        layout[j].classList.remove("layout--active");
                    }
                });
            });
        });
    });
}