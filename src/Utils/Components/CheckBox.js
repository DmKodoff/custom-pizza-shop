import React from 'react'
export const CheckBox = ({values, name, checked, onChange}) => {
    return (
        <div>
            <p>{name.toUpperCase()}</p>
            {values?.length > 0 && values?.map((value, i) => (
                <span key={i} >
                    <input
                        type="checkbox"
                        id={`${value}_${name}`}
                        name={name}
                        value={value}
                        checked={checked.includes(value)}
                        onChange={() => onChange(name, value,'checkbox')}
                    />
                    <label htmlFor={`${value}_${name}`}>{value.replace(value[0], value[0].toUpperCase())}</label>
                </span>
            ))
            }
        </div>
    )
}