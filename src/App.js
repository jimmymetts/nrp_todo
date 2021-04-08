import React, {useState} from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <h1>    <header>
      <h1>JM Todo List</h1>
    </header></h1>
    <Form setInputText={setInputText} />
    <TodoList />
    </div>
  );
}

export default App;
