import { useState } from 'react'
import SearchBar from './components/searchbar'

function App() {
  const [search, setSearch] = useState({
    checked:false,
    value:'',
    delete:false
  })
  let containerArr=[]
  
  function handleChange(e){

    const {value}= e.target
setSearch(prev=>({
  ...prev,
  value:value
}))
 containerArr.push(search)
  }
  function addItems(){

  }
// let renderedItems=search.map()
  return (
    <>
     <h2 className='text-center font-medium text-8xl text-gray-300'>todos</h2>
     <SearchBar
    handleChange={handleChange}
    addItems={addItems}
    // name={heading}
     />
{console.log(containerArr)}
    </>
  )
}

export default App
