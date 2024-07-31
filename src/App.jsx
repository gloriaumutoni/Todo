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
      { id: nanoid(), isChecked: false, title: input, deleted: false },
    ]);
    setInput("");
  }

  return (
    <>
      <h2 className="text-center font-medium text-8xl text-gray-200">todos</h2>
      <form onSubmit={handleSubmit}>
        <SearchBar handleChange={handleChange} addItems={handleSubmit} />
        {todo.map((items) => (
          <Items key={items.id} title={items.title} />
        ))}
      </form>
    </>
  );
}

export default App;
