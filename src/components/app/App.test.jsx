import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  
  afterEach(() => cleanup());
  
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('behavioral test', () => {
    
    render (<App />);
    
    const display = screen.getByTestId('divi');

    const input = screen.getByTestId('in');

    fireEvent.change(input, { target: { value: '#3083DC' } });
    fireEvent.change(input, { target: { value: '#7DDE92' } });
    expect(display).toHaveStyle({ backgroundColor: '#7DDE92' });

    const undo = screen.getByText('undo');
    fireEvent.click(undo);
    expect(display).toHaveStyle({ backgroundColor: '#3083DC' });

    const redo = screen.getByText('redo');
    fireEvent.click(redo);
    expect(display).toHaveStyle({ backgroundColor: '#7DDE92' });
  });

});
