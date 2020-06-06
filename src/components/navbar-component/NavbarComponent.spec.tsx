import * as React from 'react';
import {shallow, mount, ReactWrapper } from 'enzyme';
import  NavbarComponent, { INavbarProps }  from './NavbarComponent';
import { List, ListItem, Typography, ListItemText,  Menu, MenuItem, Button, Badge } from '@material-ui/core';
import { Inventory } from '../../models/Inventory';


/**
 * Default Properties for rendering NavbarComponent supplied.
 */

const props: INavbarProps = {
    //@ts-ignore
    authUser: null,
    errorMessage: '',
    cart: [],
    logoutAction: jest.fn()
}

const navbarComponent = <NavbarComponent {...props} />;

describe('<NavbarComponent />', () => {
    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    describe('RenderForm', () => {
        const wrapper = mount(<NavbarComponent {... props} />)

        it('Renders without error', () => {
            expect(wrapper.exists()).toBeTruthy();
        });

        it('Renders 1 List components', () => {
            // wrapper.find(selector) - Finds all nodes matching the selector
            expect(wrapper.find(List)).toHaveLength(1);
        });


    })

})