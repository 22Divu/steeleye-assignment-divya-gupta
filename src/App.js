import React from 'react';
import './App.css';
import List from './Components/List';

const listItems = [
  {
    key:'001',
    text:"I am learning React"
  },
  {
    key:'002',
    text:"I am learning Javascript",
  },
  {
    key:'003',
    text:"I am learning Nodejs",
  },
  {
    key:'004',
    text:"I am learning HTML",
  }
]

function App() {
  return (
    <div className='App-Content'>
      <div>
        <p>Name: - Divya Gupta</p>
      </div>
      <div>
        <div>
          <h4>List Component</h4>
          <p>It is a reusable functional component which can be used to create an unordered list. It takes in an array of list items as props(input).</p>
          <p>It further uses another reusable functional component to create each list item and each list item data is passed as prop(input) to this component.</p>
          <p>It creates the following html elements</p>
          <p>1) ul - unordered list</p>
          <p>2) li - list item</p>
        </div>
        <List items={listItems} />
      </div>
    </div>
  );
}

export default App;
