import React, { useEffect, useState } from 'react';
import api from '../api';

function GetPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/items')
       .then(res => setItems(res.data))
       .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Items List (GET)</h2>
      {items.length === 0 && <p>No items found.</p>}
      {items.map(item => (
        <div key={item._id} style={{ marginBottom: '10px' }}>
          <b>ID:</b> {item._id} <br />
          <b>Name:</b> {item.name} <br />
          <b>Description:</b> {item.description}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default GetPage;