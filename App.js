import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  //::::::::::::::::::::::::::Tuturial::::::::::::::::::

  const [name,setName]=useState();
  const [list,setList]=useState([]);
  const[isEdit,setIsEdit]=useState(false);
  const[editId,setEditId]=useState('');
  const[alert,setAlert]=useState({show:false,msg:'',type:''});

  //::::::::::::::My Own practice:::::::::::::::::::::::
  // const [input, setInput] = useState("");
  // const [grocery, setgrocery] = useState([]);

  // function handleBtn(e) {
  //   e.preventDefault();
  //   setgrocery([...grocery, input]);
  //   console.log(grocery);
  // }

  // function deleteFunc(name) {
  //   const updateGrocery = grocery.filter((item) => item !== name);
  //   setgrocery(updateGrocery);
  // }
  // function editFunc(mname){
  //   const edit=grocery.map((item)=>mname===item);
  //   setgrocery(edit);
  // }

  function handleSubmit(e){
    e.preventDefault();
    if(!name){
      //display: Alert
    }
    else if(name && isEdit){
      //edit

    }
    else{
      const newItem={id:new Date().getTime().toString(),Name:name};
      setList([...list,newItem]);
      setName('')
      console.log(list);
    }

  }

  return (
    
  //  {/* //::::::::::::::::::::::::::::::MY OWN practice:::::::::::::::::::
    // <>
    //   <form>
    //     <section className="section-center">
    //       <div>
    //         <h3>Grocery Bud</h3>
    //         <input */}
    // {/* //           type="text"
    //           value={input}
    //           onChange={(e) => { */}
    // {/* //             setInput(e.target.value);
    //           }}
    //         />
    //         <button type="submit" onClick={handleBtn}>
    //           submit
    //         </button>
    //       </div> */}
    // {/* //       <List functionm={deleteFunc} grocery={grocery}/>
    //       <div>
    //         <button */}
    // {/* //           className="btn"
    //           onClick={() => { */}
    // {/* //             setgrocery([]);
    //           }} */}
    // {/* //         > */}
    // {/* //           Clear Items */}
    // {/* //         </button> */}
    // {/* //       </div> */}
    // {/* //     </section> */}
    // {/* //   </form> */}
    // {/* // </> */}
  // {/* // );
  // ) */}
<>
<section className="section-center">
  <form className="grocery-form" onSubmit={handleSubmit}>
    {alert.show && <Alert/>}
    <h3>Grocery Bud</h3>
    <div className="form-control">
      <input className="grocery" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button type="submit" className="submit-btn">{isEdit?'Edit':'Submit'}</button>
    </div>
  
    {list.length>0 &&  <div className="grocery-container">
      <List itmes={list}/>
    <button className="clear-btn" type="submit">Clear All</button>
    </div>
    }
  
 
 
  </form>
 
</section>

</>
  )
}

export default App;
