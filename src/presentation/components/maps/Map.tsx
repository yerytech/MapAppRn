import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { Location } from "../../../infrastructure/interfaces/location";

interface Props {
  showsUserLocation?: boolean;
  initailLocation: Location;
}

export const Map = ({ showsUserLocation = true, initailLocation }: Props) => {
  return (
    <>
      <MapView
        showsUserLocation
        provider={Platform.OS === "ios" ? PROVIDER_DEFAULT : PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ flex: 1 }}
        region={{
          latitude: initailLocation.latitude,
          longitude: -initailLocation.longitude,
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
    </>
  );
};
