
class ui {
    constructor(element = {
        parent: "body",
        tag: "div",
        id: randomString(),
        classList: []
    }){
        
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