import { create } from "zustand";
import { Location } from "../../../infrastructure/interfaces/location";
import {
  clearWatch,
  getCurrentLocation,
  watchCurrentLocation,
} from "../../../actions/location/location";

interface LocationState {
  lastKnownLocation: Location | null;
  userLocationList: Location[];
  wachId: number | null;

  getLocation: () => Promise<Location | null>;
  whatchLocation: () => void;
  clearWatchLocation: () => void;
}

export const useLocationStore = create<LocationState>()((set, get) => ({
  lastKnownLocation: null,
  userLocationList: [],
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
        userLocationList: [...get().userLocationList, location],
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


