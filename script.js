let addInput = document.querySelector('.add-input')
let addButton = document.querySelector('.add-btn')
let txtContent = document.querySelector('.text-content')

addButton.addEventListener("click", function(){
    // todo div
    let toDoDiv = document.createElement('div')
    toDoDiv.classList.add('text')
    txtContent.append(toDoDiv)
    
    // todo txt p
    let toDoPara = document.createElement('p')
    toDoPara.innerHTML = addInput.value
    toDoPara.classList.add('text-p')
    toDoDiv.appendChild(toDoPara)

    // todo txt del btn
    let ToDoDelBtn = document.createElement('button')
    ToDoDelBtn.classList.add('del-btn')
    toDoDiv.appendChild(ToDoDelBtn)
    
    // todo txt del btn i 
    let itag = document.createElement('i')
    itag.classList.add('fa-solid')
    itag.classList.add('fa-trash-can') 
    ToDoDelBtn.appendChild(itag)

    ToDoDelBtn.addEventListener('click', function(){
        toDoDiv.remove()
    })
})
