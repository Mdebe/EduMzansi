import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/components/CustomDrawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    />
  );
}