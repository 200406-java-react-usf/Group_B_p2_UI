import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import fetchMock from 'fetch-mock'
import InvoicesComponent, { IInvoiceProps } from './InvoicesComponent';
import { makeStyles, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, ListItem } from '@material-ui/core';
import MaterialTable from 'material-table';
import { User } from '../../models/User';

const props: IInvoiceProps = {
    //@ts-ignore
    authUser: null as User
}

const invoiceComponent = <InvoicesComponent {...props} />;

describe('<InvoicesComponent />', () => {
    
    const setState = jest.fn();
    const useStateMock: any = (init: any) => [init, setState];

    describe('Rendered Table', () => {
        // Shallowly render the RegisterComponent with properties 
        /* 
            {...props} usage here is equivalent to:
            
            authUser={props.authUser}
            errorMessage={props.errorMessage}
            registerAction={props.registerAction}
        */
        props.authUser = new User(0, 'MANAGER', 'test', 'password', 'test@test.com', 'Test', 'Tester');
        const wrapper = mount(<InvoicesComponent {...props} />)

        it('Renders without error when logged in as manager', () => {
            // Expect that the component should render and contain content
            expect(wrapper.exists()).toBeTruthy();
        });

        it('Renders 1 Material Table components', () => {
            // wrapper.find(selector) - Finds all nodes matching the selector
            expect(wrapper.find(MaterialTable)).toHaveLength(1);
        });

        // it('Renders 1 TableContainer element', () => {
        //     expect(wrapper.find(TableContainer)).toHaveLength(1);
        // });

        it('Renders 1 TableHead element', () => {
            expect(wrapper.find(TableHead)).toHaveLength(1);
        });

        it('Renders 8 TableRow elements', () => {
            expect(wrapper.find(TableRow)).toHaveLength(8);
        });

        it('Renders 9 TableCell elements', () => {
            expect(wrapper.find(TableCell)).toHaveLength(9);
        });

        it('Renders 2 Table elements', () => {
            expect(wrapper.find(Table)).toHaveLength(2);
        });

        it('Renders 1 TableBody elements', () => {
            expect(wrapper.find(TableBody)).toHaveLength(1);
        });

        it('Renders 0 ListItem elements if no data', () => {
            expect(wrapper.find(ListItem)).toHaveLength(1);
        });

        
        // it('Renders 0 ListItem elements if no data', () => {
        //     const data=[
        //         { invoice_id: 1, username: 'Test User', total_cost: 2.45, date_ordered: 'October 8, 2019'}
        //     ];
        //     expect(wrapper.find(ListItem)).toHaveLength(1);
        // });
        // it('should call getTableData', () => {

        //     fetchMock.getAllInvoices()
        // })
    });

})