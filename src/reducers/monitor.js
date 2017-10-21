const defaultState = {
    appStarted: false,
    threadsStarted: false,
    tokenFound: false,
    loggedIn: false,
    dbInitialized: false,
    schemaMatches: false,
    dbCreated: false,
    periodicSyncStarted: false,
    appDisplayed: false,
};

export default function monitor(state = defaultState, action) {
  return state;
}
