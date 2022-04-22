import React from 'react'

const Button = ({title,icon}) => {
  return (
    <button type="button" className="btn btn-primary"><span className='me-2'><i className={icon}></i></span>{title}</button>
  )
}

export default Button;