import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import './TinderCards.css';
import database from './firebase';

// rfce

function TinderCards() {
    // const [people, setPeople] = useState([
    //     {
    //         name: 'steve jobs',
    //         url: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
    //     },
    //     {
    //         name: 'mark zuckerberg',
    //         url: 'https://i.guim.co.uk/img/media/9eb0a1cd9f8abb5ef85b25ac1f62f02beb4c7efa/0_26_2048_1229/master/2048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f6aa0e3499af4d3829302d7f0bb991d7'
    //     }
    // ]);

    const [people, setPeople] = useState([]);

    // piece of code which runs based on a condition
    useEffect(() => {
        // this is where the code runs...
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))

        return () => {
            unsubscribe();
        }
        // this will run ONCE when the component loads, and never again
    }, [])


    // const people = [];
    // never do this
    // people.push('abc')
    // do this instead
    // setPeople([...people, 'abc'])

    return (
        <div>
            {/* <h1>Tinder cards</h1> */}
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard 
                        className="swipe" 
                        key={person.name} 
                        preventSwipe={['up','down']}
                    >
                        <div style={{ backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{ person.name }</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
