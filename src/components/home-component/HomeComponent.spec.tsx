import * as React from 'react';
import Jest from 'jest';
import { mount, render, shallow, ShallowWrapper } from 'enzyme';
import HomeComponent, { IHomeProps } from './HomeComponent';

import { FormControl } from '@material-ui/core';

describe('HomeComponent', () => {

    const setState = jest.fn();
    const useStateMock: any = (initState: any) => [initState, setState]


    const props: IHomeProps = {
        username: "something"
    };

    const registerComponent =
        <HomeComponent {...props} />

    test('Should render', () => {
        const wrapper = shallow(registerComponent);
        expect(wrapper.exists()).toBeTruthy();
	});
})