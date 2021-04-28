import React, { useState } from 'react';
import InputTodo from '../Components/InputTodo';
import OutputTodo from '../Components/OutputTodo';

const Home = () => {
  const [inputText, setInputText] = useState({
    name: '',
    age: '',
    addr: ''
  });
  const [todoItem, setTodoItem] = useState([]);

  const AddTodo = () => {
    if (!inputText.name) {
      alert('이름을 입력하세요.');
    } else if (!inputText.age) {
      alert('나이를 입력하세요.');
    } else if (!inputText.addr) {
      alert('주소를 입력하세요.');
    } else {
      setTodoItem([
        ...todoItem,
        {
          id: todoItem.length,
          name: inputText.name,
          age: inputText.age,
          addr: inputText.addr
        }
      ]);
      setInputText({ name: '', age: '', addr: '' });
    }
    // console.log(todoItem);
  }

  const DelTodo = () => { }

  return (
    <>
      <InputTodo
        AddTodo={AddTodo}
        inputText={inputText}
        setInputText={setInputText}
      />
      <OutputTodo
        data={todoItem}
        DelTodo={DelTodo}
      />
    </>
  )
}

export default Home;