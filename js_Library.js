let count = 2;
let count2 = 420;
let user = document.querySelector(".Jane")

let friends = {
    "Phil": document.querySelector(".friend"),
    "Todd": document.querySelector(".friend2")
}
let buttons = {
    "accept_btn": document.querySelector(".friend_button"),
    "decline_btn": document.querySelector(".friend_button"),
    "accept_btn2": document.querySelector(".friend_button2"),
    "decline_btn2": document.querySelector(".friend_button2"),
}

let connectVal ={
    "connReq": document.querySelector(".btn_round"),
    "urConnct": document.querySelector(".btn_round2"),
} 


function accept(){
    friends.Phil.classList.add("hidden");
    buttons.accept_btn.classList.add("hidden");
    buttons.decline_btn.classList.add("hidden");
}

function accept2(){
    friends.Todd.classList.add("hidden");
    buttons.accept_btn2.classList.add("hidden");
    buttons.decline_btn2.classList.add("hidden");
}

function update_decline(){
    count--
    count2 -= Math.floor(Math.random()*100)+1
    connectVal.urConnct.innerHTML = count2;
    connectVal.connReq.innerHTML = count;
}

function update_accept(){
    count--
    count2 += Math.floor(Math.random()*100)+1
    if(count2 >= 500){
        connectVal.urConnct.innerHTML = "500+";
        connectVal.connReq.innerHTML = count;
    }else {
    connectVal.urConnct.innerHTML = count2;
    connectVal.connReq.innerHTML = count;
    }
}
function randomName(){
    let names = [
        "Billie-Rae Digiqiat",
        "Naidlent Lord Zarak",
        "Sottick Nerposh",
        "Sheppulk Starfriend",
        "Qaggum Moffant",
    ]
    return names[Math.floor(Math.random()*names.length-1)+1];
}

function edit_profile(){
    user.innerHTML = randomName();
}


