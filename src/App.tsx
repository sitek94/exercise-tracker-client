import * as React from 'react';

function App() {
  React.useEffect(() => {
    fetch('http://localhost:5000/api/exercise/users').then(res => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>Exercise tracker</h1>
    </div>
  );
}

export default App;
