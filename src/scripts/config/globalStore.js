export const storeConstants = {
  STORE_MODIFIED_EVT: "onModifyStore",
};

/**
 * @typedef StateChange
 * @property {*} prevState - previous state data
 * @property {*} currentState - current state data
 * @property {string} stateKey - state modified
 */

/**
 * Dispatchs a custom event that notify listeners that the store changed
 * @param {object} prevState
 * @param {string} stateKey
 */
function dispatchChangeStoreEvt(prevState, stateKey) {
  const createChangeStoreEvent = (prevState, currentState, stateKey) => {
    /**@type {StateChange} */
    const eventData = {
      prevState,
      currentState,
      stateKey,
    };
    return new CustomEvent(storeConstants.STORE_MODIFIED_EVT, {
      bubbles: true,
      composed: true,
      detail: eventData,
    });
  };

  const storeConfig = window.__APP_GLOBAL_STORE__;
  const currentStoreData = storeConfig.currentState || {};
  const currentStateData = currentStoreData[stateKey];

  const stateChangedEvent = createChangeStoreEvent(
    prevState,
    currentStateData,
    stateKey
  );

  window.dispatchEvent(stateChangedEvent);
}

export function modifyStore(stateKey, payload) {
  const storeConfig = window.__APP_GLOBAL_STORE__;
  if (!storeConfig) throw new Error("store not configured");
  const currentStoreData = storeConfig.currentState || {};
  const isStateDefined = Object.keys(currentStoreData).includes(stateKey);
  const currentStateData = currentStoreData[stateKey];
  if (!isStateDefined) throw new Error(`state ${stateKey} not registered`);

  const newStoreConfig = {
    currentState: {
      ...currentStoreData,
      [stateKey]: payload,
    },
    registry: [currentStoreData, ...storeConfig.registry],
  };

  window.__APP_GLOBAL_STORE__ = newStoreConfig;
  dispatchChangeStoreEvt(currentStateData, stateKey);
}

export function createStore(initialState = {}) {
  const initialStoreStructure = {
    currentState: initialState,
    registry: [],
  };

  window.__APP_GLOBAL_STORE__ = initialStoreStructure;
}
