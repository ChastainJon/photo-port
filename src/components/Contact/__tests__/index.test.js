import React from "react";
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from "..";

afterEach(cleanup)

describe('ContactForm component', () => {
    //baseline test
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    })
    //snpashot test
    it('matches snapshot', () => {
        const {asFragment} = render(<ContactForm/>)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('ContactMe is visible', () => {
    it('checks to see if Contact Me is visible', () =>{
        const {getByTestId} = render(<ContactForm/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    })

    it('checks to see if button contains submit', () =>{
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
})