import { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Pern Todo Lists</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          className="inputTodo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btnAdd">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
