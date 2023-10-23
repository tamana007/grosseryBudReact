import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// const List = ({ functionm, grocery }) => {
//   return (
//     <>
//       {grocery.map((item, index) => {
//         const unique = `${item}-${index}`;
//         return (
//           <>
//             <div className="grocery-container">
//               {item}
//               <button className="btn">edit</button>
//               <button
//                 className="btn"
//                 onClick={() => {
//                   functionm(item);
//                 }}
//               >
//                 delete</button>
//             </div>
//             {/* <div className="btn-container">
//             <button className="btn" onClick={deleteFunc}>delete</button></div> */}
//           </>
//         );
//       })}
//     </>
//   );

//   // <h2>list component</h2>
// };

const List=({itmes,func,edit})=>{

return(
  <>
  <div>
    {itmes.map((item)=>{
      const {id,Name}=item;
      return(
        <>
        <article key={id} className="grocery-item">
        <p  className='title' >{Name}</p>
        <div className="btn-container"> <button className="edit-btn" onClick={() => edit(id)}><FaEdit/></button>
        <button className="delete-btn" onClick={()=>{func(id)}}><FaTrash/></button></div>
       
        </article>
        </>
      )
    })}
  </div>
   

 
  {/* <h2>List Component</h2> */}
  </>
)
}

export default List;
