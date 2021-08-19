import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  /* const tags = []; */
  const formConunt = () => {
    return count === 0 ? "Ноль" : count;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };
  /* const renderTags = () => {
    if (tags.length === 0) return "Нифига нет"; 
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  }; */
  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      {/* {count === 0 && "Элементов нет"} */}
      {/* {renderTags()} */}
      <span className={getBageClasses()}>{formConunt()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
