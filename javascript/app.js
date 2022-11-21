btn = document.querySelectorAll('.btn');
let num = 0;
let turn = 'O'
function changeTurn(){
   if(turn === "X"){
    turn = "O"
   }
   else{
    turn = "X"
   }
}
const btnIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function gameWin(){
    btnIndex.forEach(item =>{
if(btn[item[0]].textContent !== '' && btn[item[0]].textContent === btn[item[1]].textContent && btn[item[1]].textContent === btn[item[2]].textContent){
    btn[item[0]].style.backgroundColor  = "#71BC78";
    btn[item[1]].style.backgroundColor = "#71BC78";
    btn[item[2]].style.backgroundColor = "#71BC78"
    document.querySelector('.lead').innerHTML = 'Game Over : You Won';
    document.querySelector('.lead').style.color = "#71BC78"
    gameOver()
    
}
  })
}

function gameOver(){
    btn.forEach(button=>{
        button.disabled = true
    })
}


btn.forEach((button) => {
    button.addEventListener('click', (e)=>{
       document.getElementById('strong').textContent = turn
       changeTurn() 
       e.target.textContent = `${turn}`
       e.target.disabled = true
       num++
       if(num === 9){
        document.querySelector('.lead').innerHTML = 'Game Over';
        document.querySelector('.lead').style.color = 'red'
    }
       gameWin()
    })
})
        
document.getElementById('again').addEventListener('click', ()=>{
    window.location.reload()
})