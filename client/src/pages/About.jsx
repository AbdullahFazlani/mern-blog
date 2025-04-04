import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Our Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to our blog! This platform was created to share knowledge,
              insights, and experiences related to web development and
              technology.
            </p>
            <p>
              Our mission is to provide high-quality content that helps
              developers of all skill levels improve their craft and stay
              updated with the latest trends in the industry.
            </p>
            <p>
              Whether you're a beginner just starting your coding journey or an
              experienced developer looking to expand your knowledge, we hope
              you'll find valuable resources here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
