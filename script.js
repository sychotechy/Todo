let todoList = [];
function TodoData(task,scheduledDate){
    this.task = task;
    this.scheduledDate = scheduledDate;
}

document.getElementById('saveButton').addEventListener('click',function(){
    var task = document.querySelectorAll('input')[0].value;
    var scheduledDate = document.querySelectorAll('input')[1].value;
    if(task != ''){
        var todo = new TodoData(task, scheduledDate);
        todoList.push(todo);
        console.log(todoList);

        showElements();
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