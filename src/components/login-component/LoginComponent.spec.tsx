import * as React from 'react';
import Jest from 'jest';
import { mount, render, shallow, ShallowWrapper } from 'enzyme';
import LoginComponent from './LoginComponent';
import { Button, FormControl } from '@material-ui/core';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('LoginComponent', () => {

const setState = jest.fn();
const useStateMock: any = (initState: any) => [initState, setState]
let shallow1;

beforeEach(()=> {
    (props.loginAction as jest.Mock).mockClear();
    shallow1 = createShallow();
})

afterEach(()=> {
    jest.clearAllMocks();
})
//@ts-ignore
const props: ILoginProps = {
    authUser: undefined,
    errorMessage: 'test',
    loginAction: jest.fn(),
    registerAction: jest.fn()
};

const loginComponent = <LoginComponent {...props} />

    it('Should render', () => {
        const wrapper = shallow(loginComponent);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Should render 2 FormControl textfields', () => {
        const wrapper = shallow(loginComponent);
        expect(wrapper.find(FormControl)).toHaveLength(2);
    });

    it("Should render 1 buttons", () => {
        const wrapper = shallow(loginComponent);
        expect(wrapper.find(Button)).toHaveLength(1);
    });
})
