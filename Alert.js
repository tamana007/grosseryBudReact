import React, { useEffect } from 'react'

const Alert = ({type,msg,removeAlert,list}) => {

  // function showAlert(show=false,msg='',type=''){
  //   setAlert({show,msg,type})
  // }

  useEffect(()=>{
    const vs=setTimeout(() => {
      // setAlert('')
      removeAlert()
      
    }, 3000);
    return ()=>{
      clearTimeout(vs);
    }
    
  },[list]);
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
