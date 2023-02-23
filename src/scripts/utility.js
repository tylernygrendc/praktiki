
export function getQueryObjectFrom(url){
    let obj = {};
    for(const [key, value] of new URLSearchParams(url).entries()) obj[key] = value;
    return obj;
}