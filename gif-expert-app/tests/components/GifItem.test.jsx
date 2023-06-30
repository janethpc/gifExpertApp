import { GifItem } from "../../src/components/GifItem"
import { render } from '@testing-library/react';

describe('pruebas en <GifItem/>', () => {
    test('debe hacer mach con el snapshot', () => {
        render(<GifItem/>)
    })
})