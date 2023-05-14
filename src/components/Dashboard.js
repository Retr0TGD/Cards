import React from 'react';
import Card from './Card';

const dashboard = () => {
  const cards = [
    { title: 'Overdue Tasks', content: '5' },
    { title: 'Tickets Due Today', content: '6' },
    { title: 'Open Tickets', content: '19' },
    { title: 'Tickets on Hold', content: '6' },
    { title: 'Unassigned Tickets', content: '5' },
    { title: 'All Tickets', content: '34' },
  ];

  return (
    <div className="card-container">
        <div className="row">
            {cards.map((card, index) => (
                <div className='col-sm-4'>
                    <Card key={index} title={card.title} content={card.content} />
                </div>
            ))} 
        </div>
    </div>
  );
};

export default dashboard;
