export default function NewUser() {
  return (
    <section>
      <h2>Create a New User</h2>
      <pre>POST /api/exercise/new-user</pre>
      <form action="/api/exercise/new-user" method="POST">
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="johnnybravo100"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
