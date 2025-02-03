import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Navigator } from "./presentation/navigation/Navigator";
export const MapsApp = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
