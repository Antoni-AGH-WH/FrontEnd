import React, { useState } from "react";

function HttpRequest() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [id, setid] = useState("");
  const [real_id, setreal_id] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Create a new student object with field information
    const student = {
      first_name: first_name,
      last_name: last_name,
      id: id,
      real_id: real_id,
    };

    // Make a POST request to the FastAPI server
    fetch("http://localhost:8000/students/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful
          return response.json();
        } else {
          // Request failed
          throw new Error(
            "Request failed IMPOSTORS. Status:" + response.status
          );
        }
      })
      .then((data) => {
        // Handle the response data
        alert("Request successful! Response:" + JSON.stringify(data));
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        alert(error.message);
      });
  };

  return (
    <div>
      <h1>HTTP Request</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label html="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={first_name}
            onChange={(event) => setfirst_name(event.target.value)}
          />
        </div>
        <div>
          <label html="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={last_name}
            onChange={(event) => setlast_name(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            name="id"
            id="id"
            value={id}
            onChange={(event) => setid(event.target.value)}
          />
        </div>
        <div>
          <label html="real_id">Real ID:</label>
          <input
            type="text"
            name="real_id"
            id="real_id"
            value={real_id}
            onChange={(event) => setreal_id(event.target.value)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HttpRequest;
