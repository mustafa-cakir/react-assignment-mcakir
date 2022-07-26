import React from 'react';
import Counter from '../../features/counter/Counter';

const Homepage = () => {
    return (
        <main className="homepage" data-testid="homepage">
            <div className="container">
                <div className="my-3">homepage will go here</div>
                <h1>Counter Feature (that comes with Redux Toolkit template)</h1>
                <hr />
                <Counter />
            </div>
        </main>
    );
};

export default Homepage;
