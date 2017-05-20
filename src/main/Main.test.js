import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

it('renders Main without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main onChange={(result)=>console.log(result)} />, div);
});
