import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="container mx-auto grid h-full grid-cols-3 overflow-hidden rounded-md border border-gray-800">
      <div className="hidden bg-blue-100 md:block">
        {/* This is a decorative panel that appears on medium screens and up */}
      </div>
      <div className="hidden bg-green-100 lg:block">
        {/* This is a second decorative panel that appears on large screens and up */}
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
