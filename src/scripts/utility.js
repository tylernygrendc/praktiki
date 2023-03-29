
class ui {
    constructor(element = {
        parent: "body",
        tag: "div",
        id: randomString(),
        classList: [],
        attr: {},
        text: String
    }){
        parent = element.parent,
        tag = element.tag,
        id = element.id,
        classList = element.classList,
        attr = element.attr,
        text = element.text
    }

    createNew(){
        let node = document.createElement(this.tag);
        node.append(document.createTextNode(this.text));
        node.id = this.id;
        this.classList.forEach(item => {
            node.classList.add(item);
        });
        for(const [key, val] of Object.entries(this.attr)) node.setAttribute(key, val);
    }

}

export function getQueryFrom(url) {
    let obj = {};
    for(const [key, value] of new URLSearchParams(url).entries()) obj[key] = value;
    return obj;
}

export function randomString() {
    window.crypto.getRandomValues(new Uint32Array(1)).toString();
}

export function showProgress(percentage) {
    if(typeof percentage === "string"){
        // 
    } else {
        // indeterminate progress
    }
}