import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: '이름',
    dataIndex: 'name',
    width: '30%',
    align: 'center',
  },
  {
    title: '나이',
    dataIndex: 'age',
    width: '30%',
    align: 'center',
  },
  {
    title: '주소',
    dataIndex: 'addr',
    width: '30%',
    align: 'center',
  }
]

// antd code
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const OutputTodo = ({ data, DelTodo }) => {
  console.log('OutputTodo Component');
  console.log(data.length);

  return (
    <div style={{ border: "1px solid skyblue", margin: '30px 20px 20px 20px' }}>
      <Table
        rowKey={data => data.id}
        rowSelection={{ type: "radio", ...rowSelection }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <button onClick={DelTodo}>삭제</button>
    </div>
  )
}

export default OutputTodo;