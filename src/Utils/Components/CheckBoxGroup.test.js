import React from 'react'
import {CheckBoxGroup} from './CheckBoxGroup'
import {render} from '@testing-library/react'



describe('render Chekbox',()=>{
    it('rende checkbox group',()=>{
        const data = {name: 'vegetables', values: ['tomato', 'mushrooms', 'pepper'], checked:['tomato']}
        const {queryByLabelText,container} = render(<CheckBoxGroup name={data.name} values={data.values} checked={data.checked}/> )
        expect(queryByLabelText('Tomato')).toBeTruthy()
        expect(queryByLabelText('Tomato')).toBeChecked()
        expect(queryByLabelText('Mushrooms')).toBeTruthy()
        expect(queryByLabelText('Pepper')).toBeTruthy()
        expect(container).toHaveTextContent(data.name.toUpperCase())

    })


})