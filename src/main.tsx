import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColorGuess } from "./challenges/color-guess.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./not-found.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ColorGuess />,
  },
  {
    path: "/color-guess",
    element: <ColorGuess />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
