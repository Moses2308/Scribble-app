import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import JournalsPage from "./components/JournalsPage";
import EntriesPage from "./components/EntriesPage";
import EntryPage from "./components/EntryPage";

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
