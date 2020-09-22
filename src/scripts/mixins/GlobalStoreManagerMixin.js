export default (BaseClass) =>
  class GlobalStoreManagerMixin extends BaseClass {
    constructor() {
      super();
    }

    onGlobalStateChange(stateKeyToWatch, callback) {
      // listen state change event
      // run callback with old and new values
    }

    modifyGlobalState(stateKeyToModify, payload) {
      // update global store
      // emit event
    }
  };
