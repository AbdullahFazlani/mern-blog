import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col gap-6 p-3 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Dashboard</h1>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Posts</h2>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
            Create a post
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-gray-300 rounded-md p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Post Title Example</h3>
              <p className="text-gray-500 text-sm">Posted on: 01/01/2023</p>
            </div>
            <div className="flex gap-2">
              <button className="text-teal-500 hover:underline">Edit</button>
              <button className="text-red-500 hover:underline">Delete</button>
            </div>
          </div>
          <p className="text-center text-gray-500">You have no posts yet.</p>
        </div>
      </div>
    </div>
  );
}
