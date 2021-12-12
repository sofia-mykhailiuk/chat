import {createStore} from "redux"
import {chatReducer} from "./chat-reducer";

export const store = createStore(chatReducer)