let input = document.getElementById("ex3");
let Save = document.getElementById('SaveBtn');
let list = document.querySelector('.todo-list');
let Delete = document.getElementById('delete');
let Finish = document.getElementById('Finish');
let todo = document.getElementById('todo');
let data_list = document.querySelector('.data_list');
let completeFlag = true;
let listArr = [];

Save.addEventListener("click", (e) => {
    e.preventDefault();
    addTOList();
    input.value = "";
})

function addTOList() {
    let value = input.value;

    if (input.value) {
        listArr.push(value);

    }
    else {
        input.placeholder = "Type something here...";
    }
    displayTODO();
}

function displayTODO() {
    let newDataTag = "";
    listArr.forEach((element, index) => {
        newDataTag = newDataTag + `<tr class="data_list">
        <th>
        <label><input id="check" type="checkbox" value="">${index + 1}</label>
      </th>
        <td id='todo ${index}'>${element}</td>
        <td class="Process_statement${index}">In progress</td>
        <td>
        <button onclick= deletetask(${index}) id="delete" type="submit" class="btn btn-danger">Delete</button>
        <button onclick= completeTask(${index})  id="Finish" type="submit" class="btn btn-success ms-1">Finished</button>
        </td>
    </tr>`
    })
    list.innerHTML = newDataTag;
};

function deletetask(id) {
    let arr = listArr;
    arr.splice(id, 1);
    displayTODO();
}

function completeTask(index) {
    let Process_statement = document.querySelector(`.Process_statement${index}`);
    let items = list.getElementsByTagName("tr");
    let arr = [...items]
    //    console.log(arr)
    for (let i of arr) {
        if (i.id == index) {
            index= i;
            console.log(index)
            if (completeFlag) {
                Process_statement.innerHTML = "Completed"
                Process_statement.style.color = "red"
                Process_statement.style.textDecoration = "line-through 2px solid ";
                document.getElementById('Finish').textContent = "Unfinished"
                
                document.getElementById("check").checked = true;
                completeFlag = false;
            } else {
                Process_statement.style.textDecoration = "none";
                document.getElementById("check").checked = false;
                document.getElementById('Finish').textContent = "Finished"
                completeFlag = true;
            }
        }
    }

}