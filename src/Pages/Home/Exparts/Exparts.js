import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import Expart from '../Expart/Expart';

const Exparts = () => {
    const experts = [
        { id: 1, name: 'Will Smith', img: expert1 },
        { id: 2, name: 'Chris Rock', img: expert2 },
        { id: 3, name: 'Dwayne Rock', img: expert3 },
        { id: 4, name: 'Messy Vai', img: expert4 },
        { id: 5, name: 'Ronaldo Bro', img: expert5 },
    ]
    return (
        <div className='container'>
            <h2 className='text-info pt-3'>Our Expats</h2>
            <div className="row">
                {
                    experts.map(expart => <Expart key={expart.id} expart={expart} />)
                }
            </div>
        </div>
    );
};

export default Exparts;