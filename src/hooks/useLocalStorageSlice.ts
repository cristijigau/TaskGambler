import { useState } from "react";
import { createLocalStorageSlice } from "../utils/createLocalStorageSlice";

// This hook makes local storage manipulations reactive (re-renders the component on state change)
export const useLocalStorageSlice = <T>(key: string, initialState?: T) => {
  const localStorageSlice = createLocalStorageSlice<T>(key, initialState);

  const [state, setState] = useState<T | null>(() =>
    localStorageSlice.loadState()
  );

  const saveState = (newState: T) => {
    localStorageSlice.saveState(newState);
    setState(newState);
  };

  return { state, saveState };
};
