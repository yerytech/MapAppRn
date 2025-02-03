import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export const LoadigScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View>
      <Text style={{ marginTop: top }}>LoadigScreen</Text>
    </View>
  );
};
