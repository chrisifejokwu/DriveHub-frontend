import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // change this to your backend URL
    fetch("http://localhost:3000/api/v1/cars")
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <h1>{data ? data : "Loading..."}</h1>
    </div>
  );
}

export default App;