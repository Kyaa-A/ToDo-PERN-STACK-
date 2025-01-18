import React, { useState } from 'react';
import Modal from './Modal';

const EditTodo = ({ todo, setTodos }) => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        setTodos(prevTodos => 
          prevTodos.map(t => 
            t.todo_id === todo.todo_id ? { ...t, description: description } : t
          )
        );
        setShowModal(false);
      } else {
        console.error("Failed to update todo");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="btn btn-warning">Edit</button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="form-control" 
            value={description} 
            onChange={e => setDescription(e.target.value)}
          />
          <button type="submit" className="mt-2 btn btn-success">Save</button>
        </form>
      </Modal>
    </>
  );
};

export default EditTodo;