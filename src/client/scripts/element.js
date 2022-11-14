class PageElement {
    constructor(tag="div", id=uniqueID(1), classList=[], attrList={}, text="") {
        this.tag = tag,
        this.id = id,
        this.classList = classList,
        this.attrList = attrList,
        this.text = text
    }
    addTo(parent=document.body, removeChildren=false) {

        let element = document.createElement(this.tag),
            node = document.createTextNode(this.text);

        element[id] = this.id;
        element.classList.add(...this.classList);
        for([key, val] in Object.entries(this.attrList)) element.setAttribute(key, val);
        element.appendChild(node);

        while(removeChildren && parent.firstChild) parent.removeChild(parent.firstChild)

        parent.appendChild();
    }
}

class multipleChoice {
    constructor(name="", options=[], allowsMultiple=false, legend="", classList=[]) {
        this.id = uniqueID(1),
        this.name = name,
        this.legend = legend === "" ? name : legend,
        this.classList = classList,
        this.options = options,
        this.allowsMultiple = allowsMultiple
    }
    addTo(parent=document.body, removeChildren=false) {
        let element = document.createElement("fieldset");

        element[id] = this.id;
        element.classList.add(...this.classList);

        let inputID = uniqueID(this.options.length);
        this.options.forEach((option, i) => {
            let input = new PageElement("input"),
                label = new PageElement("label");

            if(this.allowMultiple) {
                input.setAttribute("id", inputID[i]);
                input.setAttribute("type", "checkbox");
                input.setAttribute("name", option);
            } else {
                input.setAttribute("id", inputID[i]);
                input.setAttribute("type", "radio");
                input.setAttribute("name", this.name)
                input.setAttribute("value", option);
            }

            label.setAttribute("for", inputID[i]);
            label.innerHTML(option);

            element.append([input, label]);
        });

        while(removeChildren && parent.firstChild) parent.removeChild(parent.firstChild)

        parent.appendChild();
    }
}

class Dropdown {
    constructor(name="", options=[], classList=[], label="") {
        this.id = uniqueID(1),
        this.name = name,
        this.label = label === "" ? name : label,
        this.classList = classList,
        this.options = options
    }
    addTo(parent=document.body, removeChildren=false) {
        let element = document.createElement("select");

        element[id] = this.id;
        element.classList.add(...this.classList);
        input.setAttribute("name", this.name);

        this.options.forEach(option => {
            let input = new PageElement("option");
            input.setAttribute("value", option);
            input.setAttribute("aria-label", option);
            label.innerHTML(option);

            element.append([input, label]);
        });

        while(removeChildren && parent.firstChild) parent.removeChild(parent.firstChild)

        parent.appendChild();
    }
}

function uniqueID(quantity = 1){
    const array = new Uint32Array(quantity);
    const values = window.crypto.getRandomValues(array).toString(16);
    return quantity === 1 ? values[0] : values;
}