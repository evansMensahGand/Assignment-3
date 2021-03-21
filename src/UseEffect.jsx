import { useState, useEffect } from "react";
import "./useEffect.css";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>UseEffect</h1>
      <section className="mainContainer">
        {users.map((user, i) => (
          <div key={i} className="container" id="result">
            <div className="card">
              <div className="phase1">
                <div className="logo">
                  <img src="./logo.png" alt="" width="200px" />
                </div>
              </div>
              <div className="phase2">
                <h5>
                  <strong>Name:</strong> {user.name}
                </h5>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Phone Number:</strong> {user.phone}
                </p>
                <p>
                  <strong>Website:</strong> {user.website}
                </p>
              </div>
              {/* <hr /> */}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default UseEffect;
