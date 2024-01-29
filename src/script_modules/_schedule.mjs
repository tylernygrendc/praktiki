export function setAgendaTop(){
    let head = document.querySelector(".agenda__head");
    let body = document.querySelector(".agenda__body");
    console.log(head.scrollHeight);
    body.style.top = head.clientHeight;
}