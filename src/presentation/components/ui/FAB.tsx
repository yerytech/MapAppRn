import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { CustomIcon } from "./CustomIcon";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
export const FAB = ({ iconName, onPress, style }: Props) => {
  return (
    <View style={[styles.bnt, style]}>
      <Pressable onPress={onPress}>
        <CustomIcon
          name={iconName}
          size={30}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bnt: {
    zIndex: 1,
    position: "absolute",
    borderRadius: 30,
    backgroundColor: "#5856D6",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0.27,
      width: 4.5,
    },
    elevation: 5,
  },
});
