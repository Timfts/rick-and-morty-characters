import { storeConstants, modifyStore } from "../config/globalStore.js";

export default (BaseClass) =>
  class GlobalStoreManagerMixin extends BaseClass {
    constructor() {
      super();
    }

    onGlobalStateChange(stateKeyToWatch, callback) {
      // listen state change event
      // run callback with old and new values
      window.addEventListener(storeConstants.STORE_MODIFIED_EVT, (e) => {
        const eventData = e.detail;
        const stateChanged = eventData.stateKey;
        const isRightState = stateKeyToWatch === stateChanged;
        if (callback && isRightState) {
          callback(eventData);
        }
      });
    }

    modifyGlobalState(stateKeyToModify, payload) {
      modifyStore(stateKeyToModify, payload);
    }
  };
