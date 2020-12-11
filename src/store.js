import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer); //high order function

export default store;