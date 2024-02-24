
// =================================================================
// TASK ADD PAGE AND LOCALSTORAGE SETTINGS
const tbody = document.getElementById('tbody')

const addTask=()=>{
    const itn = document.getElementById('inputTaskName')
    const itd = document.getElementById('inputTaskDesc')
    const itp = document.getElementById('inputTaskPriority')
    // const atb = document.getElementById('addTaskButton')

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];


    if(itn.value === '' || itd.value === '' || itp.value === ''){
        alert('Please fill details before adding')
    }else{
        let newTask = document.createElement('tr');
        newTask.innerHTML = `
        <td class="px-4 py-2">
        <label class="sr-only" for="Row1">Row 1</label>
      
        <input class="size-5 rounded border-gray-300" type="checkbox" id="Row1" />
        </td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900" id="taskName">${itn.value}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700" id="taskDesc">${itd.value}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700" id="priority">${itp.value}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700" id="date">${formattedDate}</td>
        <td class="whitespace-nowrap px-4 py-2">
            <a 
            id="delete"
            href="#"
            class="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
            >
            Delete
            </a>
        </td>
        `
        tbody.appendChild(newTask)
    }

    itn.value = ''
    itd.value = ''
    itp.value = ''
    saveData()
}

tbody.addEventListener('click',(e)=>{
    if(e.target.id === 'delete'){
        e.target.parentElement.parentElement.remove()
        saveData()
    }

    if(e.target.id === 'Row1'){
      e.target.toggleAttribute('checked');
      saveData()
    }

},false)

const saveData=()=>{
    localStorage.setItem('data', tbody.innerHTML)
}

const showData=()=>{
    tbody.innerHTML = localStorage.getItem('data')
}

showData()
// =================================================================
