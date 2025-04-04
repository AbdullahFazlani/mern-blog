import React from "react";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col gap-6 p-3 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition">
          <img
            src="https://placehold.co/600x400"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600 mb-4">
              A brief description of Project 1 and what technologies were used.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="text-sm bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm border border-teal-500 text-teal-500 px-3 py-1 rounded hover:bg-teal-50"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition">
          <img
            src="https://placehold.co/600x400"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600 mb-4">
              A brief description of Project 2 and what technologies were used.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="text-sm bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm border border-teal-500 text-teal-500 px-3 py-1 rounded hover:bg-teal-50"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition">
          <img
            src="https://placehold.co/600x400"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-600 mb-4">
              A brief description of Project 3 and what technologies were used.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="text-sm bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
              >
                Live Demo
              </a>
              <a
                href="#"
                className="text-sm border border-teal-500 text-teal-500 px-3 py-1 rounded hover:bg-teal-50"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
