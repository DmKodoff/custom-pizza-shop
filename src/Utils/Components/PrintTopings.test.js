import React from 'react';
import {render} from '@testing-library/react'
import {PrintTopings} from './PrintTopings'

describe("render", () => {
	it("render with topings", () => {
        const order = {meet:['ham']}
        const {container} = render(<PrintTopings order={order} />)
		expect(container).toHaveTextContent('Toppings')
        expect(container).toHaveTextContent('ham')
	})

    it('render with out topings',() => {
        const order = {meet:[]}
        const {container} = render(<PrintTopings order={order} />)
		expect(container).toHaveTextContent('With out toppings.')
    })
})