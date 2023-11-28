/* import Swal from "sweetalert2"; */
import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  /* const mostrarAlert = () => {
    Swal.fire("", "Debe ingresar una tarea", "info");
  }; 

  /* const mostrarAlert1 = () => {
    Swal.fire("", "Tarea Guardada", "success");
  }; */

  const handleSubmit = (e) => {
    if (newTaskName.trim() === "") {
      alert("Por favor Ingrese Tarea");
      return;
    }

    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form className="my-3 row" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          style={{
            boxShadow: "1px 5px 5px #31aef7",
          }}
          type="text"
          className="form-control"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Ingresar Nueva Tarea..."
          autoFocus
        />
      </div>
      <div className="col-3 p-0 d-flex align-items-center">
        <button className="btn btn-primary btn-sm" type="submit">
          Guardar Tarea
        </button>
      </div>
    </form>
  );
};
