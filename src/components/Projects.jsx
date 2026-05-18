import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold border-b-4 border-teal-500 pb-2 mb-6 inline-block">DỰ ÁN</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <a href={proj.url} key={index} className="bg-zinc-800 text-xl p-6 rounded-2xl cursor-pointer hover:bg-zinc-700 transition duration-300 group shadow-lg">
            <h3 className="text-2xl font-semibold text-teal-400 group-hover:text-teal-300">
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {proj.title}
              </a>
            </h3>
            <p className="text-zinc-500 mb-2 text-lg">{proj.url}</p>
            <p className="text-lg text-zinc-400 mb-3"><span className="font-semibold text-zinc-200">Công nghệ:</span> {proj.tech}</p>
            <p className="text-zinc-300 mb-3 text-lg">{proj.desc}</p>
            <p className="italic text-teal-500 text-xl">Vai trò: {proj.role}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;