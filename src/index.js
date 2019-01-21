import './index.scss';
import { h, app } from 'hyperapp';
import { Greeter } from "./components.js";

const state = {
  count: 0,
  name: 'Engin'
};

const actions = {
  down: (value) => state => ({ count: state.count - value }),
  up: (value) => state => ({ count: state.count + value })
};

const view = (state, actions) => (
  <main>
    <Greeter name={state.name} />
    <h1>{state.count}</h1>
    <div>
      <button onclick={ () => {actions.down(100)} }>-</button>
      <button onclick={ () => {actions.up(100)} }>+</button>
    </div>
  </main>
);

app(state, actions, view, document.body);
