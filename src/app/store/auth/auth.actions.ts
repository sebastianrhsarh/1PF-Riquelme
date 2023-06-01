import { createAction, props } from "@ngrx/store";
import { FormatUser } from "src/app/interface/user";

export const establishUserAuth = createAction(
  '[auth] Establecer usuario',
  props<{ payload: FormatUser }>()
);

export const removeUserAuth = createAction('[auth] Quitar usuario')