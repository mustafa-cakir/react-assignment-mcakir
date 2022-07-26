import React, { useState } from 'react';

import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from './counterSlice';
import { useAppDispatch, useAppSelector } from '../../common/hooks';

const Counter = () => {
    const { value: count } = useAppSelector(redux => redux.counter);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <>
            <div className="d-flex align-items-center mb-4">
                <button className="ui-button mr-2" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    -
                </button>
                <button className="ui-button" aria-label="Increment value" onClick={() => dispatch(increment())}>
                    +
                </button>
                <div className="mx-3">Count: {count}</div>

            </div>
            <hr />
            <div>
                <input
                    className="ui-input"
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button className="ui-button mx-1" onClick={() => dispatch(incrementByAmount(incrementValue))}>
                    Add Amount
                </button>
                <button className="ui-button mx-1" onClick={() => dispatch(incrementAsync(incrementValue))}>
                    Add Async
                </button>
                <button className="ui-button mx-1" onClick={() => dispatch(incrementIfOdd(incrementValue))}>
                    Add If Odd
                </button>
            </div>
        </>
    );
};

export default Counter;
