import React from 'react';
import { render } from 'react-dom';
import 'drinks-machine-style';
import {Provider,connect} from "react-redux";
import {DrinksMachine} from "drinks-machine-view";
import {drinksMachineModel as store} from "drinks-machine-model";

const app = (
  <Provider store={store}>
    <DrinksMachine/>
  </Provider>
);
render(app,document.getElementById('app'));
