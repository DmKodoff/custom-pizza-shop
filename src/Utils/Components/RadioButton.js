import React from 'react'

export const RadioButton = ({values, name, checked, onChange}) => {
    return (
        <div>
            <p>{name.toUpperCase()}</p>
            {values?.length > 0 && values?.map((value, i) => (
                <span key={i}>
                    <input
                        type="radio"
                        id={`${value}_${name}`}
                        name={name}
                        value={value}
                        checked={value === checked}
                        onChange={()=>onChange(name,value,'radio')}
                    />
                    <label htmlFor={`${value}_${name}`}>{value}</label>
                </span>
            ))
            }
        </div>
    )
}
