// app/monetization.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Monetization() {
  const options = [
    {
      id: "free",
      title: "Free Basic Version",
      description:
        "Limited access to question banks, create small tests, view resources.",
      price: "Free",
      color: "#F3F4F6",
    },
    {
      id: "monthly",
      title: "Monthly Subscription",
      description:
        "Full access to question banks, unlimited tests, analytics, priority support.",
      price: "R99–R199 / month",
      color: "#E0F2FE",
    },
    {
      id: "school",
      title: "School-Wide License",
      description:
        "All teachers in the school get full access, centralized management.",
      price: "Contact for pricing",
      color: "#FEF3C7",
    },
    {
      id: "premium",
      title: "Premium Exam Pack Add-On",
      description:
        "CAPS exam papers with step-by-step solutions, past exam papers.",
      price: "R49–R99 / pack",
      color: "#FDE2E2",
    },
    {
      id: "ads",
      title: "Advertising (Optional)",
      description:
        "Ads shown to free users. Ad-free experience for paid subscribers.",
      price: "Optional",
      color: "#DCFCE7",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Monetization Options</Text>

      {options.map((opt) => (
        <View key={opt.id} style={[styles.card, { backgroundColor: opt.color }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{opt.title}</Text>
            <Text style={styles.cardPrice}>{opt.price}</Text>
          </View>
          <Text style={styles.cardDesc}>{opt.description}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Select</Text>
            <Ionicons name="arrow-forward" size={16} color="#fff" style={{ marginLeft: 6 }} />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F9FAFB" },
  screenTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#111827" },
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#111827", flex: 1 },
  cardPrice: { fontSize: 14, fontWeight: "bold", color: "#2563EB" },
  cardDesc: { fontSize: 14, color: "#4B5563", marginBottom: 12 },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});