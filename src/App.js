import React from "react";
import axios from "axios";
import "./App.scss";
import DashBoard from "./components/Dashboard";
import Navbar from "./components/navbar";

const baseURL = "";

const App = () => {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // invalid url will trigger an 404 error
    axios
      .get(`${baseURL}/asdf`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // if (error) return `Error: ${error.message}`;
  // if (!post) return "No post!";

  return (
    <div className="main-container">
      <Navbar />
      <DashBoard />
    </div>
  );
};

export default App;
