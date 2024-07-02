
// input 창에 글자 쓰는 곳 가져오기
let taskInput = document.getElementById("task-input");
// + 버튼 (할일 추가 버튼 가져오기)
let addButton = document.getElementById("add-button");
let taskDashBoard = document.getElementById("task-dashboard");
//B-2 할일 추가 장소 (Array 만듬)
let taskList =[];
addButton.addEventListener("click", addTask);

function addTask() {
    console.log("clicked");
    //A plan
    // let taskContent = taskInput.value;
    // taskList.push(taskContent);
    //B plan - my idea
    taskList.push(taskInput.value);
    console.log(taskList);
    render();
}
// input에 있는 value를 없에준다. "focus"란 커서가 오게될때 
taskInput.addEventListener("focus", function() {
    taskInput.value="";
})

function render() {
    let resultHTML = "";
    for(let i = 0;i<taskList.length;i++){
        //resultHTML +=  은 아래와 같은 기능
        resultHTML = resultHTML +
                   `<div class="task">
                        <div id="goBackHome">
                            ${taskList[i]}
                        </div>                   
                        <div>
                            <button>check</button>
                            <button>Delete</button>
                        </div>
                    </div>`;
    }

    taskDashBoard.innerHTML = resultHTML;
}