import React, { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sign in logic will go here
    console.log(formData);
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col gap-5 md:max-w-3xl mx-auto p-3">
        <h1 className="text-3xl font-semibold text-center my-7">Sign In</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-teal-500"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-teal-500"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 mt-4"
          >
            Sign In
          </button>
        </form>

        <div className="flex gap-1 justify-center mt-2">
          <p>Don't have an account?</p>
          <a href="/sign-up" className="text-teal-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
