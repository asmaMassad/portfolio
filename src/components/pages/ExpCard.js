import React from "react";

const ExpCard = exp => {
  const { company, title, description } = exp.ex;
  return (
    <div>
      <h6>{company}</h6>
      <p className="lead light-orange">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ExpCard;
