import { Pressable, Text, View } from "react-native";
import { globalStyle } from "../../../config/theme/globalStyle";
import { usePermissionStore } from "../../../usePermissionStore";
export const PermissionScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Habilitar Ubicacion</Text>

      <Pressable
        style={globalStyle.btnPrimary}
        onPress={requestLocationPermission}
      >
        <Text style={{ color: "white" }}>Habilitar Ubicacion</Text>
      </Pressable>

      <Text>Estado actual:{locationStatus}</Text>
    </View>
  );
};
