import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 7, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterID) => {
    const newCounter = counters.filter((c) => c.id !== counterID);
    setCounters(newCounter);
  };

  const handleReset = () => setCounters(initialState);

  const handleIncrement = (counterID) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex((c) => c.id === counterID);
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };
  const handleDecrement = (counterID) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex((c) => c.id === counterID);

    newCounters[elementIndex].value > 0
      ? newCounters[elementIndex].value--
      : (newCounters[elementIndex].value = 0);
    setCounters(newCounters);
  };

  return (
    <div>
      <button onClick={handleReset} className="btn-sm btn-primary btn m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counters.id}
          onDelete={handleDelete}
          onDecrement={handleDecrement}
          onIcrement={handleIncrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
