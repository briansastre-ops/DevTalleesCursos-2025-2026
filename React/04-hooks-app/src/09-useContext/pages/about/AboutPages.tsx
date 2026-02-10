import React from "react";
import { Link } from "react-router";

export const AboutPages = () => {
  return (
    <div className="flex-col flex  items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">About Page</h1>
      <hr />

      <div className="flex flex-col gap-2">
        <Link to="/profile" className="text-blue-500 hover:underline">
          Go to Profile
        </Link>
        <Link to="/login" className="text-blue-500 hover:underline">
          Go to Login
        </Link>
      </div>
    </div>
  );
};
