import { useState } from "react";
import SearchBar from "./components/searchbar";
import Items from "./components/items";
import { nanoid } from "nanoid";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [styled,setStyled]=useState(false)

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodo((prevTodo) => [
      ...prevTodo,
      { id: nanoid(), isChecked: styled, title: input, deleted: false},
    ]);
    setInput("");
  }
function handleChecked(id){
  setTodo((prevTodo) => prevTodo.map(todo=>todo.id===id?({
    ...todo,
    isChecked:!todo.isChecked
  }):todo));
  // e.preventDefault()
// setStyled(!styled)
}

function handleDelete(id){
  let newTodo=todo.filter(obj=>obj.id!==id)
  setTodo(newTodo)
}

  return (
    <>
      <h2 className="text-center font-medium text-8xl text-gray-200">todos</h2>
      <form onSubmit={handleSubmit}>
        <SearchBar handleChange={handleChange} addItems={handleSubmit} />
        {todo.map((items) => (
          <Items key={items.id} 
          isChecked={()=>handleChecked(items.id)} 
          title={items.title}
          titleStyle={items.isChecked?'line-through':''}
           delete={()=>handleDelete(items.id)}/>
        ))}
      </form>
    </>
  );
}

export default App;
