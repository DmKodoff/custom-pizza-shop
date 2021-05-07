import React from 'react'

export const RadioButtonsGroup = ({ values = [], name, checked, onChange }) => {
  return (
    <>
      {values.length > 0 && (
        <div>
          <p>{name.toUpperCase()}</p>
          {values.map((value, i) => (
            <span key={i}>
              <input
                type='radio'
                id={`${value}_${name}`}
                name={name}
                value={value}
                checked={value === checked}
                onChange={() => onChange(name, value, 'radio')}
              />
              <label htmlFor={`${value}_${name}`}>{value}</label>
            </span>
          ))}
        </div>
      )}
    </>
  )
}
