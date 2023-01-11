import * as error from "./error.js";

class PageElement {
    constructor(tag="", id="", classArray=[], attrObject={}, text=""){
        this.tag= tag,
        this.id = id==="" ? uniqueString() : id;
        this.classArray = classArray,
        this.attrObject = attrObject,
        this.text = text
    }
}

function createNew(tag="div", options={}){
    try{
        let el = document.createElement(tag);
        for([key, val] in Object.entries(options)){
            switch(key){
                case "id":
                    el.setAttribute("id", val);
                    break;
                case "classArray":
                    val.forEach(str => {
                        el.classList.add(str);
                    });
                    break;
                case "attrObject":
                    for([k,v] in val){
                        el.setAttribute(k, v);
                    }
                    break;
                case "text":
                    el.innerHTML(val);
                    break;
            }
        }
        if(typeof el.id === "undefined") el.setAttribute("id", uniqueString());
        return el;
    }
    catch (err){
        error.handle(err);
    }
}

function uniqueString(checkAgainstExisting=false){
    try{
        let unique = false;
        while(!unique){
            unique = window.crypto.getRandomValues(new Uint32Array(1))[0];
            if(checkAgainstExisting){
                document.querySelectorAll("*[id]").forEach(id => {
                    if(id === unique) unique = false;
                });
            }
        }
        return unique;
    }
    catch (err){
        error.handle(err);
    }
}

function uniqueArray(quantity=10, checkAgainstExisting=false){
    try{
        let unique=false;
        while(!unique){
            unique = window.crypto.getRandomValues(new Uint32Array(1));
            if(typeof quantity === "number"){
                unique = window.crypto.getRandomValues(new Uint32Array(quantity));
            } else {
                throw new Error("The quantity parameter for function uniqueArray() is either undefined or invalid. Set to typeof number to specify output length or use function unqiueString() instead.");
            }
            if(checkAgainstExisting){
                document.querySelectorAll("*[id]").forEach(id => {
                    unique.forEach(str => {
                        if(id === str) unique = false;
                    });
                });
            }
        }
        return unique;
    }
    catch (err){
        error.handle(err);
    }
}

export const createNew = createNew();
export const uniqueString = uniqueString();
export const uniqueArray = uniqueArray();