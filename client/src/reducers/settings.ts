import { createReducer } from "@reduxjs/toolkit";
import { CheatsAction } from "actions/settings";
import { destroyScene, initScene } from "../3d/main";

export interface SettingsState {
  cheats: boolean;
  sick3dmode: boolean;
  authServiceOrigin: string;
}

const PROD_AUTH_SERVICE = "https://auth.rollycubes.com/";
const LOCAL_AUTH_SERVICE = "http://localhost:3031/";

export const settingsReducer = createReducer<SettingsState>(
  {
    cheats: true,
    sick3dmode: false,
    authServiceOrigin: PROD_AUTH_SERVICE,
  },
  (builder) => {
    builder
      .addCase("TOGGLE_3D", (state, action) => {
        state.sick3dmode = !state.sick3dmode;
        // TODO: remove these side effects
        if (state.sick3dmode) {
          initScene();
        } else {
          destroyScene();
        }
      })
      .addCase("CHEATS", (state, action: CheatsAction) => {
        state.cheats = action.newState;
      })
      .addCase("DEV_AUTH_SERVICE_TOGGLE", (state, action) => {
        if (state.authServiceOrigin === PROD_AUTH_SERVICE) {
          state.authServiceOrigin = LOCAL_AUTH_SERVICE;
        } else {
          state.authServiceOrigin = PROD_AUTH_SERVICE;
        }
      });
  }
);
