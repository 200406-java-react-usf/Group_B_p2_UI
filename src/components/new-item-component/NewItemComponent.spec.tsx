import * as React from 'react';
import Jest from 'jest';
import { shallow, mount, ReactWrapper } from 'enzyme';

import NewItemComponent, { INewItemProps } from './NewItemComponent';
import { makeStyles, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, ListItem, ExpansionPanelActions } from '@material-ui/core';
import MaterialTable from 'material-table';
import { User } from '../../models/User';
import { Inventory } from '../../models/Inventory';
import { MemoryRouter, Redirect } from 'react-router';
import { NewInventory } from '../../models/NewInventory';

const props: INewItemProps = {
    //@ts-ignore
    authUser: null as User,
    //@ts-ignore
    newItem: null as NewInventory,
    newItemAction: jest.fn()
}

const adminDashComponent = <NewItemComponent {...props} />

describe('AdminDashComponent renders', () => {
    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    describe('Renders logged in as manager', () => {
        props.authUser = new User(0, 'MANAGER', 'test', 'password', 'test@test.com', 'Test', 'Tester');
        const wrapper = mount(<MemoryRouter><NewItemComponent {...props} /></MemoryRouter>)

        it('Renders', () => {
            expect(wrapper.exists()).toBeTruthy();
        })
    })
});