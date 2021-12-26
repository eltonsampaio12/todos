import { useState, useEffect } from "react";

import {
  doc,
  setDoc,
  getDocs,
  collection,
  onSnapshot,
  deleteDoc,
} from "@firebase/firestore";

import db from "../firebase";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const docRef = collection(db, "Todos");
    getDocs(docRef).then((snapshot) => {
      let aux = [];
      snapshot.docs.forEach((doc) => {
        aux.push(doc.data());
      });
      setTodos(aux);
    });
  }, []);

  async function handleDelete(id) {
    const newTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodo);

    await deleteDoc(doc(db, "Todos", id.toString()))
      .then(() => {
        alert("done");
      })
      .catch((error) => {
        console.log(error);
        alert("problem");
      });
  }

  async function addTodos(event) {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      textValue: text,
    };

    if (text.length > 0) {
      setTodos([...todos].concat(newTodo));

      const docRef = doc(db, "Todos", newTodo.id.toString());

      await setDoc(docRef, newTodo)
        .then(() => {
          console.log("done");
          setText("");
          alert("done");
        })
        .catch((error) => {
          console.log(error);
          alert("a problem happed");
        });

      setText("");
    }
  }
  return (
    <div>
      <h1>My todos</h1>
      <div className="todocontainer">
        <form type="submit" onSubmit={addTodos}>
          <div className="todofields">
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
              type="text"
            />
            <button type="submit">+</button>
          </div>
        </form>

        {todos.map((todo) => (
          <div className="todoValues" key={todo.id}>
            <div>{todo.textValue}</div>
            <div onClick={() => handleDelete(todo.id)} className="deletebutton">
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
