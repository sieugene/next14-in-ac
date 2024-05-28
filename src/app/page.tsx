import styles from "./page.module.css";
import { getClient } from "./client";
import AddTodo from "./form/add-todo";

async function getTodos() {
  const client = await getClient();
  return client.task.findMany({});
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className={styles.main}>
      <AddTodo />
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.description}</div>;
      })}
    </main>
  );
}
