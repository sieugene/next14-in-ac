"use client";
import { addAction } from "./add-action";

export default function AddTodo() {
  return (
    <div>
      <form action={addAction}>
        <input name="description" />
        <button>submit</button>
      </form>
    </div>
  );
}
