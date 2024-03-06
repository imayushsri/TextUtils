import React from 'react'
export default function Alert(props) {
    const Capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
      props.alert && <div className={`alert alert-${props.alert.typo} alert-dismissible fade show`} role="alert">
          <strong>{Capitalize(props.alert.typo)}</strong>: {props.alert.msg}
      </div>
    
  )
}
