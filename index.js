import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return (
    <div className="item">
      <b>Name:</b> {props.name} <br />
      <b>Price:</b> KSH {props.price}
    </div>
  );
}

function App() {
  return (
    <div>
      <Item name="Cheese" price="250.00" />
      <Item name="Bread" price="90.00" />
      <Item name="Ice cream" price="240.00" />
      <Item name="Meat pie" price="130.00" />
      <Item name="Hotdog" price="70.00" />
      <Item name="Milk-cookies" price="100.00" />
      <Item name="Medium-sized Shopping bag" price="10.00" />
    </div>
  );
}

const el = <App />;
ReactDOM.render(el, document.getElementById('root'));
