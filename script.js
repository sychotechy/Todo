let todoList = [];
function TodoData(task,scheduledDate){
    this.task = task;
    this.scheduledDate = scheduledDate;
}

const currentDate = new Date();
const dateInFormat = currentDate.getFullYear()+"-"+(currentDate.getMonth()+1)+"-"+currentDate.getDate();

const sampleTask1 = {
    task: "Do homework",
    date: "2022-9-12"
}

const sampleTask2 = {
    task: "Start Coding",
    date: "2022-9-12"
}

const sampleTask3 = {
    task: "Learn Javascript",
    date: "2022-9-13"
}
localStorage.setItem('sampleTask1', JSON.stringify(sampleTask1));
localStorage.setItem('sampleTask2', JSON.stringify(sampleTask2));
localStorage.setItem('sampleTask3', JSON.stringify(sampleTask3));



Notification.requestPermission().then(function (permission) {
    if(permission){
        console.log("Notification permission is granted");
    }
    else{
        console.log("Notification permission is denied");
    }
});



for(var i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);
    const todoDate = JSON.parse(localStorage.getItem(key)).date;
    if(todoDate == dateInFormat){
        new Notification(JSON.parse(localStorage.getItem(key)).task,{
            body: "Today's task",
            icon: "./to-do-list.png"
        });
    }
}



document.getElementById('saveButton').addEventListener('click',function(){
    var task = document.querySelectorAll('input')[0].value;
    var scheduledDate = document.querySelectorAll('input')[1].value;
    if(task != ''){
        var todo = new TodoData(task, scheduledDate);
        todoList.push(todo);
        console.log(todoList);

        showElements();
        document.querySelectorAll('input')[0].value = '';
        document.querySelectorAll('input')[1].value = '';
    }
    else{
        alert("Enter a valid task");
    }
})


function showElements(){
    document.getElementById('table-body').innerHTML = '';
    todoList.forEach(function(item,index){
        htmlCode = `
        <tr>
        <th scope='row'>${index+1}</th>\n
        <td>${item.task}</td>\n
        <td>${item.scheduledDate}</td>
        <td><button class='btn btn-xs btn-danger' onClick='deleteItem(${index})'><i class='bi bi-trash'></i></button></td>
        </tr>`;
        document.getElementById('table-body').innerHTML += htmlCode;
    })
}

function deleteItem(index){
    todoList.splice(index,1);
    showElements();
}