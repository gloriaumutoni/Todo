import { useState,useEffect } from "react";
import SearchBar from "./components/searchbar";
import Items from "./components/items";
import { nanoid } from "nanoid";

function App() {
  const [search, setSearch] = useState({
    checked: false,
    value: "",
    delete: false,
  });
  let id=nanoid()
  const [data, setData] = useState([search]);
  function handleChange(e) {
    const { value } = e.target;
    setData((prevItem) =>
      prevItem.map((prev) => ({
        ...prev,
        value: value,
      }))
    );
    
    
  }
useEffect(()=>{
  data.map(items=>localStorage.setItem('items',JSON.stringify(items)))
},[data])
  function addItems() {
  //  let localStorage.getItem(JSON.parse('items'))
   return data.map(obj=> <Items key={id} value={obj.value}/>)
  }
 
  return (
    <>
      <h2 className="text-center font-medium text-8xl text-gray-200">todos</h2>
      <SearchBar
        handleChange={handleChange}
        addItems={addItems}
      />
     {/* {data && addItems()} */}
      { data.map(obj=> <Items key={id} value={obj.value}/>)}
    </>
  );
}

export default App;
