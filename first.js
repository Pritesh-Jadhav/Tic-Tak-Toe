let Allboxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");


let Turn = true;

let winarr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

Allboxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Clicked!!!!")
        if(Turn){
            Turn = false;
            box.innerText = "X";
            box.style.color = "#ff80ed";
        }else{
            Turn = true;
            box.innerText = "O";
        }
        box.disabled = true;
    }
        
    )
});



resetbtn.addEventListener("click",(reset)=>{
    location.reload();
})


const winpattern = ()=> {
    for(pattern of winpattern){
        console.log(pattern)
    }
}
















//  0,1,2
// 3,4,5
// 6,7,8
// 0,3,6
// 1,4,7
// 2,5,8
// 0,4,8
// 2,4,6