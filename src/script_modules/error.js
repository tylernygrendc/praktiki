function handle(error){
    let str = "";
    if(typeof error === "object") {
        str = `${error.name}: ${error.message}`;
    } else {
        str = `Error: ${error}.`
    }
}


export const handle = handle();