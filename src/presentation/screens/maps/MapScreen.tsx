import { StyleSheet, View } from "react-native";
import { Map } from "../../components/maps/Map";
import { useLocationStore } from "../../store/location/useLocationStore";
import { LoadigScreen } from "../loading/LoadingScreen";
import { useEffect } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();
  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) return <LoadigScreen />;

  return (
    <View style={{ flex: 1 }}>
      <Map initailLocation={lastKnownLocation} />
    </View>
  );
};
