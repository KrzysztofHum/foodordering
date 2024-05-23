import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Tabs, withLayoutContext } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TopTaps = withLayoutContext(createMaterialTopTabNavigator().Navigator);

export default function OrderListNavigator() {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white" }}>
      <TopTaps>
        <TopTaps.Screen name="index" options={{ title: "Active" }} />
      </TopTaps>
    </SafeAreaView>
  );
}
