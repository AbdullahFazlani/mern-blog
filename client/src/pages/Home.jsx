import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to My Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you'll find a variety of articles and insights on web
          development, technology trends, and programming tips.
        </p>
        <button className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">
          View all posts
        </button>
      </div>
    </div>
  );
}
