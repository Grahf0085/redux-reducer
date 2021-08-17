import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { ReduxProvider } from '../../state/ReduxProvider';

describe('App component', () => {
  
  afterEach(() => cleanup());
  
  it('renders App', () => {
    const { asFragment } = render(
      <ReduxProvider>
        <App />
      </ReduxProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('behavioral test', () => {
    
    render (
      <ReduxProvider>
        <App />
      </ReduxProvider>
    );
    
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
