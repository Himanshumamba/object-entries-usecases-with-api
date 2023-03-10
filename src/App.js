import { useState, useEffect } from 'react';
import Form from './components/Form';

import Table from './components/Table';
function App() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  //re run on user
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${BASE_URL}${reqType}`);
        const data = await response.json();

        setItems(data);
      } catch (error) {
        throw error('Not found ');
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />

      <Table items={items} />
    </div>
  );
}

export default App;
