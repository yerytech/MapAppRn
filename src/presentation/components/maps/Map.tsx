import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { Platform, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Location } from "../../../infrastructure/interfaces/location";
import { FAB } from "../ui/FAB";
import { useLocationStore } from "../../store/location/useLocationStore";

interface Props {
  showsUserLocation?: boolean;
  initailLocation: Location;
}

export const Map = ({ showsUserLocation = true, initailLocation }: Props) => {
  const { getLocation, whatchLocation, clearWatchLocation, lastKnownLocation } =
    useLocationStore();
  const mapRef = useRef<MapView>();
  const cameraLocation = useRef(initailLocation);

  const moveCamareToUserLocation = (location: Location) => {
    if (!mapRef.current) return;
    mapRef.current.animateCamera({
      center: location,
    });
  };
  const moveToCurrentLocation = async () => {
    const location = await getLocation();
    if (!mapRef.current) return;
    moveCamareToUserLocation(location!);
  };

  useEffect(() => {
    whatchLocation();
    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnownLocation) {
      moveCamareToUserLocation(lastKnownLocation);
    }
  }, [lastKnownLocation]);

  return (
    <>
      <MapView
        ref={(map) => (mapRef.current = map!)}
        showsUserLocation
        provider={Platform.OS === "ios" ? PROVIDER_DEFAULT : PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ flex: 1 }}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {/* <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="My Marker"
          description="This is my marker"
          image={require("../../../assets/marker.png")}
        /> */}
      </MapView>
      <FAB
        iconName={"compass"}
        onPress={moveToCurrentLocation}
        style={{ bottom: 20, right: 20 }}
      />
    </>
  );
};
