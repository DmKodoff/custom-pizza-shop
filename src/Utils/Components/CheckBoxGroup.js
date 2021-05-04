import React from 'react'
export const CheckBoxGroup = ({ values = [], name='name', checked, onChange }) => {

const chooseHandler = (name,value)=> {
           const chekedValues =  checked.includes(value)
                ? checked.filter(item => item !== value)
                : checked.concat(value)

              onChange(name,chekedValues)
}

  return (
    <>
      {values.length > 0 && (
        <div>
          <p>{name.toUpperCase()}</p>
          {values.map((value, i) => (
            <span key={i}>
              <input
                type='checkbox'
                id={`${value}_${name}`}
                name={name}
                value={value}
                checked={checked.includes(value)}
                onChange={() => chooseHandler(name, value)}
              />
              <label htmlFor={`${value}_${name}`}>
                {value.replace(value[0], value[0].toUpperCase())}
              </label>
            </span>
          ))}
        </div>
      )}
    </>
  )
}
