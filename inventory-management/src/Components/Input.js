import React from 'react'

function InputField({type,value,onChange}) {
  return (
    <input
              type={type}
              value={value}
              onChange={onChange}
            />
  )
}

export default InputField
