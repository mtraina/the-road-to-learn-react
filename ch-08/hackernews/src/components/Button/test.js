import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
    const props = {
        onClick: () => console.log('test')
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button {...props}>Give Me More</Button>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Button {...props}>Give Me More</Button>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});