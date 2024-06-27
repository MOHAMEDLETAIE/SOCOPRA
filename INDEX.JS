let heart_btn = document.getElementsByClassName("heart_btn");
console.log("heart_btn",heart_btn);
for(let i =0;i < heart_btn.length;i++) {
    // HEART BUTTON
    heart_btn[i].addEventListener("click", function (){
        if(heart_btn[i].style.color=="white"){
            heart_btn[i].style.color="red";
        }else{
            heart_btn[i].style.color="white";

        }
    })
}
