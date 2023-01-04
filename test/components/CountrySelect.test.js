import reducer, { CountrySelect } from "../../src/components/CountrySelect"
import { fireEvent, render, screen } from '@testing-library/react';

describe('Tests on the search city component', () => {
 
    test('should return a city', () => { 
        const State = { value: 'Managua' };
        expect(reducer(State, CountrySelect())).toEqual({ value: 'Managua' });
    })

})
