import React, { useState } from 'react';
import api from '../api';

function PostPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) return alert('All fields required');

    try {
      await api.post('/items', { name, description });
      alert('Item added!');
      setName('');
      setDescription('');
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding item');
    }
  };

  return (
    <div>
      <h2>Add Item (POST)</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <br />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default PostPage;