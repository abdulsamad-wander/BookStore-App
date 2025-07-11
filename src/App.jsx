import React, { useState } from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Layout from "./books/Layout.jsx";
import Error from "./books/Error.jsx";
import BooksCarousel from "./components/BooksCarsoural.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BookDetails from "./books/BookDetails.jsx";
import { Toaster } from "sonner";
function App() {
  const [search, setSearch] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout search={search} setSearch={setSearch} />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About search={search} />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "books",
          element: <BooksCarousel search={search} />,
        },
        {
          path: "books/:id",
          element: <BookDetails />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
