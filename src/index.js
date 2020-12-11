import store from './store';
import {bugAdded, bugResolved} from './actions'

// const unsubscribe = store.subscribe(() => {
//     console.log("Store changed!", store.getState());
// });

store.dispatch(bugAdded("Bug 3"));
store.dispatch(bugResolved(1));

// unsubscribe();



console.log(store.getState());
