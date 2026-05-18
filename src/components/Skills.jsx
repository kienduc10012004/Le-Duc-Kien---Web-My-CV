import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold border-b-4 border-teal-500 pb-2 mb-6 inline-block">KỸ NĂNG & CHỨNG CHỈ</h2>
      <div className="bg-zinc-800 p-6 rounded-xl space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-zinc-100">Kỹ năng cứng</h3>
          <div className="space-y-3 ml-4">
            {skills.hard.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="text-base font-medium text-teal-400 text-xl">{skillGroup.name}:</h4>
                <p className="text-zinc-300 text-xl ml-2">{skillGroup.techs}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-zinc-100">Kỹ năng mềm</h3>
          <ul className="list-disc list-outside ml-6 text-zinc-300 text-xl space-y-1">
            {skills.soft.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">Chứng chỉ</h3>
          <p className="text-zinc-300 text-xl ml-4">• Toeic 550</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;