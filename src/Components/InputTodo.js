import React from 'react';
import { Form, Input, Button } from 'antd';

const InputTodo = ({ inputText, setInputText, AddTodo }) => {

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputText({ ...inputText, [name]: value });
  }

  return (
    <Form onFinish={AddTodo} style={{ padding: '20px 20px 0px 20px', border: '1px solid skyblue', margin: '20px' }}>
      <Form.Item label="이름">
        <Input
          name="name"
          onChange={onChangeInput}
          value={inputText.name}
          required
        />
      </Form.Item>
      <Form.Item label="나이">
        <Input
          name="age"
          onChange={onChangeInput}
          type="number"
          value={inputText.age}
          required
        />
      </Form.Item>
      <Form.Item label="주소">
        <Input
          name="addr"
          onChange={onChangeInput}
          value={inputText.addr}
          required
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>추가</Button>
      </Form.Item>
    </Form>
  )
}

export default InputTodo;