import * as React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <section>
      <h1>MainPage</h1>
      <Link to="/admin">admin</Link>
    </section>
  );
};

export default MainPage;
