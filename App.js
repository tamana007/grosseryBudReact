import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [input, setInput] = useState("");
  const [grocery, setgrocery] = useState([]);

  function handleBtn(e) {
    e.preventDefault();
    setgrocery([...grocery, input]);
    console.log(grocery);
  }

  function deleteFunc(name) {
    const updateGrocery=grocery.filter((item) => item !== name);
    setgrocery(updateGrocery);
  }

  return (
    <>
      <form>
        <section className="section-center">
          <div>
            <h3>Grocery Bud</h3>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button type="submit" onClick={handleBtn}>
              submit
            </button>
          </div>
          {grocery.map((item, index) => {
            const unique=`${item}-${index}`;
            return (
              <>
                <div className="grocery-container" key={unique}>
                  {item}
                  <button className="btn">
                    edit
                  </button>
                  <button
                    className="btn"
                    onClick={()=>{deleteFunc(item)}}
                    
                  >
                    delete
                  </button>
                </div>
                {/* <div className="btn-container">
            <button className="btn" onClick={deleteFunc}>delete</button></div> */}
              </>
            );
          })}
          <div>
          <button className="btn" onClick={()=>{setgrocery([])}}>Clear Items</button>
          </div>
        </section>
      </form>
    </>
  );
}

export default App;
