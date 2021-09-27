import React, { useState } from 'react'
import './App.css';
import Todolist from './Todolist';

function App() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]); 

  const itemEvent = (event) => {
    setInputList(event.target.value);

  };
  const listOfItems = (event) => {
    if(inputList){
    setItems((oldItems) => {
      return [...oldItems, inputList];

    });
    setInputList("");}

  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) =>{
      return oldItems.filter((arrEle, index) => {
        return index !== id;

      })
    })
  }

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDO List</h1>
        <br/>
        <input type="text" value = {inputList}
        placeholder= "Add Items" onChange={itemEvent} ></input>
        <button onClick= {listOfItems}>+</button>
        <ol>
         
        { items.map((itemval, index) => {
          return (
          <Todolist
          key={index} 
          id={index}
          text={itemval} 
          onSelect={deleteItems}
           />
          );
         })}
        </ol>
      </div>

    </div>

      
    </>
  )
}

export default App;

