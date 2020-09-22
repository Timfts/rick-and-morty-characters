const storeConstants = {
  STORE_MODIFIED_EVT: "onModifyStore",
};

function dispatchChangeStoreEvt(prevState, stateKey) {
  const createChangeStoreEvent = (prevState, currentState) =>
    new CustomEvent(storeConstants.STORE_MODIFIED_EVT, {
      bubbles: true,
      composed: true,
      detail: {
        prevState,
        currentState,
      },
    });

  const storeConfig = window.__APP_GLOBAL_STORE__;
  const currentStoreData = storeConfig.currentState || {};
  const currentStateData = currentStoreData[stateKey];

  const stateChangedEvent = createChangeStoreEvent(prevState, currentStateData);

  window.dispatchEvent(stateChangedEvent);
}

export function modifyStore(stateKey, payload) {
  const storeConfig = window.__APP_GLOBAL_STORE__;
  if (!storeConfig) throw new Error("store not configured");
  const currentStoreData = storeConfig.currentState || {};
  const currentStateData = currentStoreData[stateKey];
  if (!currentStateData) throw new Error(`state ${stateKey} not registered`);

  const newStoreConfig = {
    currentState: {
      ...currentStoreData,
      [stateKey]: payload,
    },
    registry: [currentStoreData, ...storeConfig.registry],
  };

  window.__APP_GLOBAL_STORE__ = newStoreConfig;
  dispatchChangeStoreEvt(currentStateData);
}

export function createStore(initialState = {}) {
  const initialStoreStructure = {
    currentState: initialState,
    registry: [],
  };

  window.__APP_GLOBAL_STORE__ = initialStoreStructure;
}
