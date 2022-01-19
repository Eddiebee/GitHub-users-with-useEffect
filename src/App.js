import { FaGithub, FaGithubAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [users, setUsers] = useState([]);
  const [position, setPosition] = useState("");

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

  useEffect(() => {
    window.addEventListener("scroll", logScroll);

    function logScroll(e) {
      setPosition(window.scrollY);
    }

    return () => {
      window.removeEventListener("scroll", logScroll);
    };
  }, []);

  return (
    <>
      <div className="App">
        <Header title="GitHub Users" icon={<FaGithub />} position={position} />
        <List list={users} badge={<FaGithubAlt />} />
      </div>
    </>
  );
}

export default App;
