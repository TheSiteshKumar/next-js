async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  return res.json();
}

export default async function TodoPage() {
  const todos = await getTodos();
  
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-2">
            <input type="checkbox" checked={todo.completed} readOnly />
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
} 