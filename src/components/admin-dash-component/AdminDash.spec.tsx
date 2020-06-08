import * as React from 'react';
import Jest from 'jest';
import { shallow, mount, ReactWrapper } from 'enzyme';

import AdminDashComponent, { IAdminDashProps } from './AdminDashComponent';
import { makeStyles, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, ListItem, ExpansionPanelActions } from '@material-ui/core';
import MaterialTable from 'material-table';
import { User } from '../../models/User';
import { Inventory } from '../../models/Inventory';
import { MemoryRouter, Redirect } from 'react-router';

const props: IAdminDashProps = {
    //@ts-ignore
    authUser: null as User,
    errorMessage: '',

}

const adminDashComponent = <AdminDashComponent {...props} />

describe('AdminDashComponent renders', () => {
    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    describe('Redirects before logged in as manager', () => {
        props.authUser = new User(0, 'MANAGER', 'test', 'password', 'test@test.com', 'Test', 'Tester');
        const wrapper = mount(<MemoryRouter><AdminDashComponent {...props} /></MemoryRouter>)

        it('Renders', () => {
            expect(wrapper.exists()).toBeTruthy();
        })
    })
});