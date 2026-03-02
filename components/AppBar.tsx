import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

type DrawerParamList = {
  index: undefined;
};

type NavigationProp = DrawerNavigationProp<DrawerParamList>;

type Props = {
  title: string;
};

export default function AppBar({ title }: Props) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      {/* Background Circles */}
      <View style={styles.circleLarge} />
      <View style={styles.circleSmall} />

      {/* Left - Hamburger */}
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => navigation.toggleDrawer()}
      >
        <Ionicons name="menu" size={26} color="#111827" />
      </TouchableOpacity>

      {/* Center Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right - Profile */}
      <TouchableOpacity style={styles.iconBtn}>
        <Image
          source={require("../assets/profile.png")}
             
          style={styles.profilePic}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: Platform.OS === "ios" ? 50 : 35,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    overflow: "hidden",
  },

  title: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },

  iconBtn: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  profilePic: {
    width: 65,
    height: 65,
    borderRadius: 18,
  },

  /* 🔵 Decorative Circles */

  circleLarge: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#E0F2FE",
    top: -120,
    right: -80,
  },

  circleSmall: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#DBEAFE",
    top: -70,
    left: -60,
  },
});