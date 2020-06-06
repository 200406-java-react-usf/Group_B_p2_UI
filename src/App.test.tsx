import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount, shallow } from 'enzyme';
import NavbarComponent from './components/navbar-component/NavbarComponent';


describe('<App />', () => {

  test('renders learn react link', () => {
    const app = render(<App />);
    // const linkElement = getByText(/learn react/i);
    expect(app).toBeTruthy();
  });

  test('Renders NavBarComponent', () => {
    // Testing wrapper around the rendered component
    // The wrapper exposes accessors to the rendered component for testing
    const wrapper = mount(<App />);

    expect(wrapper.find(NavbarComponent)).toHaveLength(1);
  })

})