import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "../screens/maps/MapScreen";
import { LoadigScreen } from "../screens/loading/LoadingScreen";
import { PermissionScreen } from "../screens/permissions/PermissionScreen";

const Stack = createStackNavigator();
export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
      />
      <Stack.Screen
        name="LoadigScreen"
        component={LoadigScreen}
      />
      <Stack.Screen
        name="PermissionScreen"
        component={PermissionScreen}
      />
    </Stack.Navigator>
  );
};
