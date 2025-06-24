import React from 'react';

const SmallCards = ({ project }) => {
  return (
    <div className="rounded-xl shadow-md bg-white p-4 w-full max-w-md mx-auto">
      <img src={project.image} alt={project.title} className="rounded-lg w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-4">{project.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{project.description}</p>
      <p className="text-sm text-blue-500 mt-2">{project.technologies}</p>
      <div className="flex gap-4 mt-4">
        <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-green-600 underline">Live</a>
        <a href={project.github} target="_blank" rel="noreferrer" className="text-black underline">GitHub</a>
      </div>
    </div>
  );
};

export default SmallCards;
