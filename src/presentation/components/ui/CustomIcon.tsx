import Ionicons from "@expo/vector-icons/Ionicons";
interface Props {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
}
67;
export const CustomIcon = ({
  name = "location-outline",
  size = 24,
  color = "white",
}: Props) => {
  return (
    <Ionicons
      name={name}
      size={size}
      color={color}
    />
  );
};
