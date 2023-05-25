import React, { useState } from "react";

const Counter = (props) => {
    // const [value, setValue] = useState(props.value);
    const { value } = props;
    // const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };

    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    const handleIncrement = () => {
        props.onIncrement(props.id);
        // setValue(value + 1);
        // setValue((prevState) => prevState + 1)
        // setValue((prevState) => prevState + 1)
    };

    const handleDecrement = () => {
        props.onDecrement(props.id);
        // setValue(value - 1);
    };

    // const handleTagChange = (id) => {
    //   setTags((prevState) => prevState.filter((tag) => tag !== id));
    // };

    // const renderTags = () => {
    //   return tags.length !== 0
    //     ? tags.map((tag) => (
    //         <li
    //           key={tag}
    //           className="btn btn-primary btn-sm m-2"
    //           onClick={() => handleTagChange(tag)}
    //         >
    //           {tag}
    //         </li>
    //       ))
    //     : "No tags";
    // };

    return (
        <div>
            {/* <ul>{renderTags()}</ul> */}
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleIncrement}
            >
                +
            </button>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleDecrement}
            >
                -
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
