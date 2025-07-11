import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorPage = useRouteError();
  console.log(errorPage);
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4 text-white">{errorPage && <p>{errorPage.data}</p>}</p>
      <a href="/" className="mt-6 text-blue-500 underline">
        Go back Home
      </a>
    </div>
  );
};

export default Error;