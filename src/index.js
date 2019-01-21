import './index.css';
import { h, app } from 'hyperapp';

const state = {
  count: 0,
  name: 'Franky'
};

const actions = {
  down: (value) => state => ({ count: state.count - value }),
  up: (value) => state => ({ count: state.count + value })
};

const view = (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <div>
      <button onclick={ () => {actions.down(100)} }>-</button>
      <button onclick={ () => {actions.up(100)} }>+</button>
    </div>
  </main>
);

app(state, actions, view, document.body);
