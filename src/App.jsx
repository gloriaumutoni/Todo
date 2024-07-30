import { useState, useEffect } from "react";
import SearchBar from "./components/searchbar";
import Items from "./components/items";
import { nanoid } from "nanoid";

function App() {
  const [search, setSearch] = useState({
    id : nanoid(),
    checked: false,
    title: "",
    delete: false,
    
  });

  const [todo, settodo] = useState([]);
  
  const [data, setData] = useState([search]);
  function handleChange(e) {
    const { value } = e.target.value;
    setData((prevItem) =>
      prevItem.map((prev) => ({
        ...prev,
        title: value,
      }))
    );
  }
  useEffect(() => {
    data.map((items) => localStorage.setItem("items", JSON.stringify(items)));
  }, [data]);

  function addItems() {
    // //  let localStorage.getItem(JSON.parse('items'))
    // let renderItem= data.map(obj=> <Items key={id} value={obj.value}/>)
    settodo([...todo,data.map(item=>item.title)])

  }

  return (
    <>
      <h2 className="text-center font-medium text-8xl text-gray-200">todos</h2>
      <SearchBar handleChange={handleChange} addItems={addItems} />
      {/* {data && addItems()} */}
      {todo.map((obj) => (
        <Items key={obj.id} title={obj.title} />
      ))}
    </>
  );
}

export default App;
