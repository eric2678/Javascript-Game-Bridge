function changePage(level){
    let name = document.getElementById("textbox");
    localStorage.setItem("Level", JSON.stringify(level));
    localStorage.setItem("name", JSON.stringify(name.value));

    if(document.getElementById("cheatMode").checked){
        localStorage.setItem("cheatMode", "true");
    }else{
        localStorage.removeItem("cheatMode");
    }
    if(document.getElementById("computerMode").checked){
        localStorage.setItem("computerMode", "true");
    }else{
        localStorage.removeItem("computerMode");
    }

    localStorage.setItem("computerSpeed", JSON.stringify(document.getElementById("computerSpeedRange").value));

    window.open("main.html", "_self");
}
window.onload = function(){
    document.getElementById("easy").onclick = () => {
        changePage('easy')
    }

    document.getElementById("hard").onclick = () => {
        changePage('hard')
    }

    document.getElementById("computerSpeedRange").oninput = () => {
        document.getElementById("computerSpeed").innerHTML = document.getElementById("computerSpeedRange").value;
    }
}
