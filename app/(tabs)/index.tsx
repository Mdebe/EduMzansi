import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppBar from "@/components/AppBar";

export default function Dashboard() {
  const router = useRouter();

  const classes = [
    { id: "1", title: "Grade 10 Maths", color: "#22C55E" },
    { id: "2", title: "Grade 10 Physical Science", color: "#10B981" },
    { id: "3", title: "Grade 11 Maths", color: "#2563EB" },
    { id: "4", title: "Grade 11 Physical Science", color: "#3B82F6" },
    { id: "5", title: "Grade 12 Maths", color: "#F59E0B" },
    { id: "6", title: "Grade 12 Physical Science", color: "#EF4444" },
  ];

  return (
    <View style={styles.container}>
      
      {/* Reusable App Bar */}
      <AppBar title="Teacher Dashboard" />

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Welcome */}
        <Text style={styles.welcome}>Welcome Back, Mr Mbatha 👋</Text>

        {/* Highlight Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {classes.map((c) => (
            <TouchableOpacity
              key={c.id}
              style={[styles.highlightCard, { backgroundColor: c.color }]}
              onPress={() =>
                router.push({ pathname: "/class/[id]", params: { id: c.id } })
              }
            >
              <Text style={styles.highlightText}>{c.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Quick Grid */}
        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.smallCard}
            onPress={() => router.push("/classes")}
          >
            <Ionicons name="school-outline" size={28} color="#2563EB" />
            <Text style={styles.cardLabel}>My Classes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.smallCard}
            onPress={() => router.push("/question-bank")}
          >
            <Ionicons name="book-outline" size={28} color="#F59E0B" />
            <Text style={styles.cardLabel}>Question Bank</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.smallCard}
            onPress={() => router.push("/resources")}
          >
            <Ionicons name="folder-outline" size={28} color="#10B981" />
            <Text style={styles.cardLabel}>Resources</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.smallCard}
            onPress={() => router.push("/analytics")}
          >
            <MaterialIcons name="analytics" size={28} color="#EF4444" />
            <Text style={styles.cardLabel}>Analytics</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Class Stats</Text>

          <View style={styles.statsRow}>
            <View style={[styles.statCard, { backgroundColor: "#FDE68A" }]}>
              <Text style={styles.statNumber}>95%</Text>
              <Text style={styles.statLabel}>Average Marks</Text>
            </View>

            <View style={[styles.statCard, { backgroundColor: "#BFDBFE" }]}>
              <Text style={styles.statNumber}>120</Text>
              <Text style={styles.statLabel}>Students</Text>
            </View>

            <View style={[styles.statCard, { backgroundColor: "#A7F3D0" }]}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Tests Conducted</Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Upgrade & Plans</Text>

      <View style={styles.premiumCard}>
        <View style={styles.premiumHeader}>
          <Ionicons name="diamond-outline" size={24} color="#fff" />
          <Text style={styles.premiumTitle}>Premium Features</Text>
        </View>

        <Text style={styles.premiumText}>
          Unlock unlimited tests, full CAPS exam packs, analytics,
          and school-wide access.
        </Text>

        <TouchableOpacity
          style={styles.premiumButton}
          onPress={() => router.push("/monetization")}
        >
          <Text style={styles.premiumButton}>View Plans</Text>
          <Ionicons name="arrow-forward" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    color: "#111827",
  },

  horizontalScroll: {
    marginHorizontal: 20,
    marginTop: 10,
  },

  highlightCard: {
    width: 200,
    padding: 20,
    borderRadius: 15,
    marginRight: 15,
    elevation: 3,
  },

  highlightText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  grid: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  smallCard: {
    width: "48%",
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  cardLabel: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#111827",
  },

  statsSection: {
    marginTop: 20,
    marginHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#111827",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statCard: {
    width: "32%",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
   premiumCard: {
    backgroundColor: "#1E40AF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },

  premiumHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },

  premiumTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  premiumText: {
    color: "#E0E7FF",
    marginBottom: 15,
  },

  premiumButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
  },

  statLabel: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#111827",
  },
});