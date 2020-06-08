import * as React from 'react';
import Jest from 'jest';
import { shallow, mount, ReactWrapper } from 'enzyme';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import * as logoutActions from './logout-action';

const mockStore = configureStore();
const store = mockStore();

describe('logout_actions', () => {
    beforeEach(() => {
        store.clearActions();
    });
    afterEach(() => {
        fetchMock.restore()
    })

    describe('successful_logout', () =>{
        const expectedActions = [
            {
                type: logoutActions.logoutActionTypes.SUCCESSFUL_LOGOUT, 
                //@ts-ignore
                payload: null as User
            },
            {
                type: logoutActions.logoutActionTypes.INTERNAL_SERVER_ERROR,
                payload: ''
            }
        ];

        const store = mockStore
    })
});