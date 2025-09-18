export const createLocalStorageSlice = <T>(key: string, initialState?: T) => {
  const loadState = (): T | null => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return initialState ?? null;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Could not load state from localStorage", err);
      return null;
    }
  };

  const saveState = (state: T) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error("Could not save state to localStorage", err);
    }
  };

  return { loadState, saveState };
};
