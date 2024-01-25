let btn = document.getElementById("btn");
let div = document.getElementById("container");
let number = 1;
btn.onclick = function () {
    //     if (number % 2 == 0) {
    //         div.style.backgroundColor = "yellow"
    //         div.style.color = "red"
    //         div.style.width = "200px"
    //         div.style.height = "200px"
    //         div.style.lineHeight = "200px"
    //         div.style.textAlign = "center"
    //         div.style.border = "10px solid black"
    //         div.style.borderRadius = "50%"
    //     } else {
    //         div.style.backgroundColor = ""
    //         div.style.color = ""
    //         div.style.width = ""
    //         div.style.height = ""
    //         div.style.lineHeight = ""
    //         div.style.textAlign = ""
    //         div.style.border = ""
    //         div.style.borderRadius = ""

    //     }
    //     //number = number + 1
    //     while (n < 100) {
    //         number++;
    //         n++
    //     }
    // if(dispatchEvent.classList.contains("round-element")=== true){
    //     dispatchEvent.classList.remove("round-element");
    // }else{
    //     div.classList.add("rounf-element");
    // }
    //cach 3
    div.classList.toggle("round-element")
};