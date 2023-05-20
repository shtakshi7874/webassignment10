todos = [
    {
      name: "buy eggs",
      id: "1",
      done:false
    },
    {
      name: "sleep",
      id: "2",
      done:true
    },
    {
      name: "study",
      id: "3",
      done:true
    },
    // {
    //   name:"todo",
    //   id:"4",
    //   done:false
    // }
  ]
  
  const todoContainer = document.getElementById("todo-container")
  
function newElement(){
  const inputValue=document.getElementById("myInput").value;
  if(inputValue === ""){
    alert("Please write something");
  }
  else{
    todo1={
    name:inputValue,
    id:"4",
    done:false}
    todos.push(todo1);
    render();
  }
}


  function render() {
    todoContainer.innerHTML =""
    todos.forEach(item => {
      todoContainer.appendChild(getTodo(item))
    })
  }
  function getTodo(item) {
    const container = document.createElement("div")
    container.classList.add("todo")
    const input = document.createElement("input")
    input.id = item.id;
    input.checked = item.done
    input.type = "checkbox"
    container.appendChild(input)  
    
    input.addEventListener("change", () => {
      item.done = !item.done
      render()
    })
  
    const label = document.createElement("label")
    label.htmlFor = item.id;
    label.innerText = item.name
    // container.appendChild(label)
    if (item.done) {
      label.classList.add("cut")
    }
    container.appendChild(label)
    return container
  }
  
  render();