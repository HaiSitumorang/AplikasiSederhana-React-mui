import './App.css';
import React, {useState} from 'react';
import Button from "@mui/material/Button"

const fruitList =[
  {
    name : 'Mango'
  },
]

const App = () => {
  const [list, setList] = React.useState(fruitList)
  const [name, setName] = React.useState('')

  function handleChange(event){
    setName(event.target.value)
  }

  function handleAdd(){
    const newList = list.concat({name})
    setList(newList)
    
    setName('')
  }

  return (
    <div className="App">
      <h1>Simple List in React</h1>
      <h2>Adding a dynamically generated list item</h2>

      {
        list.map( (item, index) =>
          <p>{item.name+(index+1)}</p>
        )
      }

      <div>
        <label>
          Fruit Name
        </label>
        
        <input type="text" value={name} onChange={handleChange} />

        <Button type="button" onClick={handleAdd} variant="contained">
          Add Fruit
        </Button>
      </div>
    </div>
  );
}

export default App;