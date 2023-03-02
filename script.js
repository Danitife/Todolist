let myInp = document.getElementById("myInp");
let todoArr = [];
let show = document.getElementById("show")

function showTodo(){
    show.innerHTML = ""
    todoArr.forEach((el, index)=>{
        show.innerHTML += `
            <div class="inner">
                <h3>${el}</h3>
                <button onclick="del(${index})">&times;</button>
            </div>
        `
    })
}
function add(){
    todoArr.push(myInp.value);
    showTodo()
}

function del(index){
    todoArr.splice(index,1);
    showTodo()
}