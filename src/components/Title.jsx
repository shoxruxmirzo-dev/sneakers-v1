import React from 'react';

const Title = ({ title = 'Заголовок' }) => {
  return <h1 className="text-4xl font-bold">{title}</h1>;
};

export default Title;
