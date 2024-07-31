import { useState } from "react";
import SearchBar from "./components/searchbar";
import Items from "./components/items";
import { nanoid } from "nanoid";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodo((prevTodo) => [
      ...prevTodo,
      { id: nanoid(), isChecked: false, title: input, deleted: false},
    ]);
    setInput("");
  }
// function handleChecked(e){
// setTodo(prevTodo=>(
//   prevTodo.map(todo=>{
//     if(todo.isChecked){
//       let styles
// todo.tile?''
//     }
//     todo.isChecked?'line-through':'none'
//   })
// ))
// }
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
          // isChecked={handleChecked} 
          title={items.title}
           delete={()=>handleDelete(items.id)}/>
        ))}
      </form>
    </>
  );
}

export default App;
