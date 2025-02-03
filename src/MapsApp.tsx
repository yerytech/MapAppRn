import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./presentation/navigation/Navigator";

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
