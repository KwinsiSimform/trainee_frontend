import React, { useState } from 'react';
import api from '../api';

function PutPage() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!id || !name || !description) return alert('All fields required');

    try {
      await api.put(`items/${id}`, { name, description });
      alert('Item updated!');
      setId('');
      setName('');
      setDescription('');
    } catch (err) {
      alert(err.response?.data?.error || 'Error updating item');
    }
  };

  return (
    <div>
      <h2>Update Item (PUT)</h2>
      <form onSubmit={handleUpdate}>
        <input placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
        <br />
        <input placeholder="New Name" value={name} onChange={e => setName(e.target.value)} />
        <br />
        <input placeholder="New Description" value={description} onChange={e => setDescription(e.target.value)} />
        <br />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}

export default PutPage;