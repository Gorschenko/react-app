import React, { useState } from "react";
import Counter from "components/counter";

const CounterList = () => {
    const initialState = [
        { id: 1, value: 0, name: "Ненужная вещь" },
        { id: 2, value: 4, name: "Ложка" },
        { id: 3, value: 0, name: "Вилка" },
        { id: 4, value: 0, name: "Тарелка" },
        { id: 5, value: 0, name: "Набор минималиста" }
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        setCounters((prevState) => prevState.filter((c) => c.id !== id));
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        setCounters((prevState) => {
            return prevState.map((c) => {
                if (c.id === id) {
                    c.value = c.value + 1;
                }
                return c;
            });
        });
    };
    const handleDecrement = (id) => {
        setCounters((prevState) => {
            return prevState.map((c) => {
                if (c.id === id) {
                    c.value = c.value - 1;
                }
                return c;
            });
        });
    };

    return (
        <div>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    id={count.id}
                    value={count.value}
                    name={count.name}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}
            >
                Сброс
            </button>
        </div>
    );
};

export default CounterList;
