import { StoreApi, UseBoundStore, create } from 'zustand';

import { Color } from '../../types/colorsTypes';

interface IColorsStore {
  colors: Color[];
  setColors: (newColors: Color[]) => void;
}

const useColorsStore: UseBoundStore<StoreApi<IColorsStore>> = create((set) => ({
  colors: [],
  setColors: (newColors: Color[]) => {
    set({ colors: newColors });
    // Save to localstorage
  },
}));

export default useColorsStore;
