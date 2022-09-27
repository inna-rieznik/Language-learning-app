import {combineReducers, legacy_createStore as createStore} from "redux";
import wordsReducer from "./WordsReducer";
                                      //{value from state : reduser for this part }
let reducers = combineReducers({wordsData : wordsReducer}); //peredajem objekt

let store;
store = createStore(reducers);

export default store;