import { useState, useEffect } from "react";
import List from "./components/List";

function App() {
  const [users, setUsers] = useState([]);
  // console.log(users);

  const URL = "https://api.github.com/users";

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw Error;
        const data = await response.json();
        setUsers(() => data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <>
      <div className="App">
        <h1>GitHub Users</h1>
        <List list={users} />
      </div>
    </>
  );
}

export default App;
