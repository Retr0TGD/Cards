import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;
