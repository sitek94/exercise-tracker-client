export default function AllUsers() {
  return (
    <section>
      <h2>Get all users</h2>
      <pre>GET /api/exercise/users</pre>
      <form action="/api/exercise/users" method="GET">
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
