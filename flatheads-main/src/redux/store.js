
import {dataReducer} from './storeData/dataReducer.js';
import {cartReducer} from './Cart/cartReducer'
import { combineReducers } from "redux";
import {reducer as SignUpReducer } from "./Signup/reducer";
import { reducer as LogInReducer} from "./Login/reducer"
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    Data : dataReducer,
	Cart : cartReducer,
  signup:SignUpReducer,
  login:LogInReducer
})

const store = createStore(
 rootReducer,
  composeWithDevTools()
);

export {store}

