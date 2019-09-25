import React from "react";

const SkillCard = field => {
  const { title, skills } = field.field;
  return (
    <div>
      <h6>{title}</h6>
      <ul className="list-inline">
        {skills.map((skill, j) => (
          <li key={j} className="list-inline-item mr-3">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
