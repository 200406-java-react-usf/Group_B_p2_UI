  import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import InvoicesComponent, { IInvoiceProps } from './InvoicesComponent';
import { FormControl, TableContainer } from '@material-ui/core';
import MaterialTable from 'material-table';

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
        const wrapper = mount(<InvoicesComponent {...props} />)

        it('Renders without error', () => {
            // Expect that the component should render and contain content
            expect(wrapper.exists()).toBeTruthy();
        });

        it('Renders 1 FormControl components', () => {
            // wrapper.find(selector) - Finds all nodes matching the selector
            expect(wrapper.find(MaterialTable)).toHaveLength(1);
        });

        it('Renders 2 input elements', () => {
            expect(wrapper.find('input')).toHaveLength(2);
        });

        it('Renders 6 buttons', () => {
            expect(wrapper.find('button')).toHaveLength(6);
        });
    });

})