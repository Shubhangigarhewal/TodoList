import React, { useEffect, useState } from "react";

const App = () => {
  const getData = () => {
    const data = JSON.parse(localStorage.getItem("list"));
    if (data) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };

  const [inputVal, setInputVal] = useState("");
  const [inputArr, setInputArr] = useState(getData());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(inputArr));
  }, [inputArr]);

  const addItems = () => {
    if (!inputVal) {
      alert("please give some data");
    } else {
      setInputArr([...inputArr, inputVal]);
      setInputVal(" ");
    }
  };

  const DeleteItems = (id) => {
    const newArr = inputArr.filter((val, ind) => {
      return id !== ind;
    });
    setInputArr(newArr);
  };

  const DeleteAll = () => {
    setInputArr([]);
  };

  return (
    <div className = "header">
      <div>
        Todo App <br />
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button onClick={addItems}>Submit</button>
      </div>
      <div>
        <ul>
          {inputArr.map((val, ind) => {
            return (
              <li key={ind}>
                {val} <button onClick={() => DeleteItems(ind)}>Delete</button>
              </li>
            );
          })}
          <button onClick={DeleteAll}>
            Delete All
          </button>
        </ul>
      </div>
    </div>
  );
};

export default App;
