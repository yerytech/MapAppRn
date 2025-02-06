import Geolocation from "@react-native-community/geolocation";
import { Location } from "../../infrastructure/interfaces/location";

export const getCurrentLocation = (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (info) => {
        resolve({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      (error) => {
        console.log(`Error al obtener la ubicación: ${error.message}`);

        reject(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
};


export const watchCurrentLocation = (
  locationCallback: (location: Location) => void
): number => {
  return Geolocation.watchPosition(
    (info) => {
      locationCallback({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
    },
    (error) => {
      throw new Error(`Error al obtener la ubicación: ${error.message}`);
    },
    {
      enableHighAccuracy: true,
    }
  );
};

export const clearWatch = (watchId: number) => {
  Geolocation.clearWatch(watchId);
};