import { createReducer, on } from "@ngrx/store";
import { FormatUser } from "src/app/interface/user";
import { establishUserAuth, removeUserAuth } from "./auth.actions";

export const authFeatureKey = 'auth';

export interface AuthState {
  authUser: FormatUser | null;
}

const initialState: AuthState = {
  authUser: null,
}

export const authReducer = createReducer(
  initialState,
  on(establishUserAuth,(currentState, {payload}) => {
    return {
      authUser: payload
    }
  }),
  on(removeUserAuth, (currentState)=> {
    return {
      authUser: null
    }
  })
  );
