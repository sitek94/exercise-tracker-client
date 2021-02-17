export default function ExerciseLog() {
  return (
    <section>
      <h2>Get user's log</h2>
      <pre>GET /api/exercise/log</pre>

      <p>
        <strong>Query parameters:</strong>
      </p>

      <ul>
        <li>
          <code>userId</code> user's ID (required)
        </li>
        <li>
          <code>from, to</code> dates YYYY-MM-DD format (optional)
        </li>
        <li>
          <code>limit</code> number (optional)
        </li>
      </ul>
    </section>
  );
}
