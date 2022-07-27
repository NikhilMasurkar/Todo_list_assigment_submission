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
        newDataTag += `<tr class="data_list">
        <th>
        <label>${index + 1}</label>
      </th>
        <td id='todo${index}'>${element}</td>
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
    for (let i = 0; i<arr.length;i++) {
         
        if (i == index) {
            index = i;
            console.log()
           
            if (completeFlag) {
                Process_statement.innerHTML = "Completed"
                Process_statement.style.color = "red"
                Process_statement.style.textDecoration = "line-through 2px solid ";
                document.querySelectorAll('Finish').textContent = "Unfinished"

                document.querySelectorAll(".check").checked = true;
                completeFlag = false;
            } else {
                Process_statement.innerHTML = "In Progress"
                Process_statement.style.color = "black"
                Process_statement.style.textDecoration = "none";
                completeFlag = true;
            }
        }
    }

}