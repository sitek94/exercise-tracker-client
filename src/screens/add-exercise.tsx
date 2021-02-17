export default function AddExercise() {
  return (
    <section>
      <h2>Add Exercise</h2>
      <pre>POST /api/exercise/add</pre>
      <form action="/api/exercise/add" method="POST">
        <div>
          <label htmlFor="userId">User ID*</label>
          <input
            id="userId"
            name="userId"
            type="text"
            placeholder="fCcIsTh3b3$t"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description*</label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Explosive push up workout"
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration* (minutes)</label>
          <input
            id="duration"
            name="duration"
            type="text"
            placeholder="75"
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date (YYYY-MM-DD)</label>
          <input id="date" name="date" type="text" placeholder="2021-02-05" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
