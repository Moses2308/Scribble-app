import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/style.css";

import NotFoundPage from "./componentPages/NotFoundPage";
import HomePage from "./componentPages/HomePage";
import JournalsPage from "./componentPages/JournalsPage";
import EntriesPage from "./componentPages/EntriesPage";
import EntryPage from "./componentPages/EntryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/journals",
    element: <JournalsPage />,
  },
  {
    path: "/journals/:journalId",
    element: <EntriesPage />,
  },
  {
    path: "/journals/:journalId/:entryId",
    element: <EntryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
