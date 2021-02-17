import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section>
      <h2>Nothing here</h2>
      <Link to="/">Back to homepage</Link>
    </section>
  );
}
