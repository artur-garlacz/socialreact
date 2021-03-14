import React from 'react';
import ReactDOM from 'react-dom';
import * as SharedStyles from './Shared.styles';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SharedStyles.Button label={'Click me'} />, div)
})

it("renders button correctly", () => {
    const { getByTestId } = render(<SharedStyles.Button label='Click me' />)
    expect(getByTestId('btncustom')).toHaveTextContent('Click me');
})

// it("renders button correctly", () => {
//     const { getByTestId } = render(<SharedStyles.Button label='Click me xD' />)
//     expect(getByTestId('btncustom')).toHaveTextContent('Click me');
// })
