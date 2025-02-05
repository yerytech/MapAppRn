import React, { useEffect } from "react";
import { PropsWithChildren } from "react";
import { AppState } from "react-native";
import { usePermissionStore } from "../../usePermissionStore";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParam } from "../navigation/StackNavigator";

export const PermissionChecker = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParam>>();


  useEffect(() => {
    if (locationStatus === "granted") {
      navigation.reset({
        routes: [{ name: "MapScreen" }],
      });
    } else if (locationStatus === "undetermined") {
      navigation.reset({
        routes: [{ name: "PermissionScreen" }],
      });
    }
  }, [locationStatus]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
};
