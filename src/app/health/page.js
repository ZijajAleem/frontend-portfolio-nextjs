async function getHealthData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return response.json();
}

export default async function Health() {
  const data = await getHealthData();

  return (
    <main>
      <h1>Health Check</h1>

      <h2>Fetched Data</h2>

      <p><strong>ID:</strong> {data.id}</p>

      <p><strong>Title:</strong> {data.title}</p>

      <p><strong>Completed:</strong> {data.completed ? "Yes" : "No"}</p>
    </main>
  );
}