import React from 'react';
import Card from './Card';

const dashboard = () => {
  const firstBlock = [
    { title: 'Overdue Tasks', content: '5' },
    { title: 'Tickets Due Today', content: '6' },
    { title: 'Open Tickets', content: '19' },
    { title: 'Tickets on Hold', content: '6' },
    { title: 'Unassigned Tickets', content: '5' },
    { title: 'All Tickets', content: '34' },
  ];

  const secondBlock = [ 
    { title: 'Unresolved Tickets by Priority', content: 'Lorem Isum dolor sit amet' },
    { title: 'Unresolved Tickets by Status', content: 'Lorem Isum dolor sit amet' },
    { title: 'New & Open Tickets Category-wise', content: 'Lorem Ipsum dolor sit amet' },
  ];

  return (
    <div className="card-container">
        <div className="row">
            {firstBlock.map((card, index) => (
                <div className='col-sm-2'>
                    <Card key={index} title={card.title} content={card.content} />
                </div>
            ))} 
        </div>

        <div className="row">
            {secondBlock.map((card, index) => (
                <div className='col-sm-4'>
                    <Card key={index} title={card.title} content={card.content} />
                </div>
            ))} 
        </div>
    </div>
  );
};

export default dashboard;
