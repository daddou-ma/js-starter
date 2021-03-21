import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

const Hello = ({ name }) => (`Hello ${name}`);

let container = null;
const beforeeach = () => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
};

const aftereach = () => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
};

describe('hello component', () => {
  it('render correct name', () => {
    expect.assertions(1);
    beforeeach();
    act(() => {
      render(<Hello name="John" />, container);
    });
    expect(container.textContent).toBe('Hello John');
    aftereach();
  });
});
