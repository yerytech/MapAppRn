import { create } from "zustand";
import { Location } from "../../../infrastructure/interfaces/location";
import {
  clearWatch,
  getCurrentLocation,
  watchCurrentLocation,
} from "../../../actions/location/location";

interface LocationState {
  lastKnownLocation: Location | null;
  userLocation: Location[];
  wachId: number | null;

  getLocation: () => Promise<Location | null>;
  whatchLocation: () => void;
  clearWatchLocation: () => void;
}

export const useLocationStore = create<LocationState>()((set, get) => ({
  lastKnownLocation: null,
  userLocation: [],
  wachId: null,

  getLocation: async () => {
    const location = await getCurrentLocation();
    set({ lastKnownLocation: location });
    return location;
  },

  whatchLocation: () => {
    const wachId = get().wachId;
    if (wachId !== null) {
      get().clearWatchLocation();
    }
    const id = watchCurrentLocation((location) => {
      set({
        lastKnownLocation: location,
        userLocation: [...get().userLocation, location],
      });
    });
  },
  clearWatchLocation: () => {
    const wachId = get().wachId;
    if (wachId !== null) {
      clearWatch(wachId);
    }
  },
}));


