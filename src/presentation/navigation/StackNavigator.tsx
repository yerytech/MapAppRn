import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "../screens/maps/MapScreen";
import { LoadigScreen } from "../screens/loading/LoadingScreen";
import { PermissionScreen } from "../screens/permissions/PermissionScreen";

export type RootStackParam = {
  MapScreen: undefined;
  LoadigScreen: undefined;
  PermissionScreen: undefined;
};

const Stack = createStackNavigator<RootStackParam>();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadigScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
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
