import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function CustomDrawer(props: any) {
  const { state, navigation } = props;

  const activeRoute = state.routeNames[state.index];

  const DrawerItem = ({
    label,
    icon,
    route,
  }: {
    label: string;
    icon: React.ReactNode;
    route: string;
  }) => {
    const isActive = activeRoute === route;

    return (
      <TouchableOpacity
        style={[styles.item, isActive && styles.activeItem]}
        onPress={() => navigation.navigate(route as never)}
      >
        {icon}
        <Text style={[styles.itemText, isActive && styles.activeText]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={["#1E3A8A", "#2563EB", "#3B82F6"]}
      style={{ flex: 1 }}
    >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ flex: 1 }}
      >
        {/* 🔥 Profile Header */}
        <View style={styles.profileSection}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Celimpilo Mbatha</Text>
          <Text style={styles.profileEmail}>teacher@email.com</Text>
        </View>

        {/* 🔹 Navigation Items */}
        <View style={styles.menuSection}>
          <DrawerItem
            label="Dashboard"
            route="index"
            icon={<Ionicons name="home-outline" size={22} color="#fff" />}
          />

          <DrawerItem
            label="My Classes"
            route="classes"
            icon={<Ionicons name="school-outline" size={22} color="#fff" />}
          />

          <DrawerItem
            label="Resources"
            route="resources"
            icon={<Ionicons name="folder-outline" size={22} color="#fff" />}
          />

          <DrawerItem
            label="Analytics"
            route="analytics"
            icon={<MaterialIcons name="analytics" size={22} color="#fff" />}
          />

          {/* ✅ FIXED MONETIZATION LINK */}
          <DrawerItem
            label="Monetization"
            route="monetization"
            icon={
              <MaterialIcons
                name="monetization-on"
                size={22}
                color="#fff"
              />
            }
          />
        </View>

        {/* 🔴 Logout Button */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutBtn}>
            <Ionicons name="log-out-outline" size={22} color="#fff" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  profileImage: {
    width: 90,
    height: 120,
    borderRadius: 65,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#fff",
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileEmail: {
    color: "#E5E7EB",
    fontSize: 13,
  },
  menuSection: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  activeItem: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  itemText: {
    color: "#fff",
    marginLeft: 15,
    fontSize: 15,
  },
  activeText: {
    fontWeight: "bold",
  },
  logoutSection: {
    marginTop: "auto",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  logoutText: {
    color: "#fff",
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "bold",
  },
});