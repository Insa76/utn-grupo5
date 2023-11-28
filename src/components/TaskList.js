import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, toggleTask, showCompleted = false }) {
  console.log(showCompleted);
  const taskListItems = (doneValue) =>
    tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskItem key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <table
      className="col-12 text-dark my-3 bg-white rounded "
      style={{
        boxShadow: "3px 5px 5px #31aef7",
      }}
    >
      <thead>
        <tr className="rounded">
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>{taskListItems(showCompleted)}</tbody>
    </table>
  );
}
