import * as React from 'react';
import Jest from 'jest';
import { shallow, mount, ReactWrapper } from 'enzyme';
import fetchMock from 'fetch-mock'
import NavbarComponent, { INavbarProps } from './NavbarComponent';
import { makeStyles, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, ListItem, ExpansionPanelActions } from '@material-ui/core';
import MaterialTable from 'material-table';
import { User } from '../../models/User';
import { Inventory } from '../../models/Inventory';
import { MemoryRouter } from 'react-router';

const props: INavbarProps = {
    //@ts-ignore
    authUser: null as User,
    cart: ({} as Array<Inventory>),
    errorMessage: '',
    logoutAction: jest.fn()
}

const invoiceComponent = <NavbarComponent {...props} />;

describe('<NavbarComponent />', () => {
    
    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    describe('Renders Navbar before login', () => {
        const wrapper = shallow(<NavbarComponent {...props} />)

        it('Renders ', () => {
            // Expect that the component should render and contain content
            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('Renders Navbar when logged in as user', () => {
        props.authUser = new User(0, 'USER', 'test', 'password', 'test@test.com', 'Test', 'Tester');
        const wrapper = shallow(<NavbarComponent {...props} />)

        it('Renders ', () => {
            // Expect that the component should render and contain content
            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('Renders Navbar when logged in as Google user', () => {
        props.authUser = new User(0, 'Guest', 'test', 'password', 'test@test.com', 'Test', 'Tester');
        const wrapper = shallow(<NavbarComponent {...props} />)

        it('Renders ', () => {
            // Expect that the component should render and contain content
            expect(wrapper.exists()).toBeTruthy();
        });
    });

    describe('Renders Navbar when logged in as manager', () => {
        props.authUser = new User(0, 'MANAGER', 'test', 'password', 'test@test.com', 'Test', 'Tester');
        const wrapper = mount(<MemoryRouter><NavbarComponent {...props} /></MemoryRouter>)

        it('Renders ', () => {
            // Expect that the component should render and contain content
            expect(wrapper.exists()).toBeTruthy();

        });
    });

});