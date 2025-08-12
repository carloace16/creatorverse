import React from "react";
import { useRoutes, Link } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import "./App.css";

const App = () => {
  // Sets up routing rules
  let element = useRoutes([
    {
      path: "/", // The default view, showing all creators
      element: <ShowCreators />,
    },
    {
      path: "/new", // The page for adding a new creator
      element: <AddCreator />,
    },
    {
      path: "/edit/:id", // A page for editing a creator, :id is a placeholder
      element: <EditCreator />,
    },
    {
      path: "/view/:id", // A page for viewing a single creator
      element: <ViewCreator />,
    },
  ]);

  return (
    <div className="App">
      <header className="header">
        <h1>💫 Creatorverse</h1>
        <nav>
          <Link to="/" className="nav-link">
            View All Creators
          </Link>
          <Link to="/new" className="nav-link">
            Add a Creator
          </Link>
        </nav>
      </header>

      <main>{element}</main>
    </div>
  );
};

export default App;
