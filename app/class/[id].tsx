// app/class/[id].tsx
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Learner = {
  id: string;
  name: string;
  grade: string;
  marks: number;
};

export default function ClassDetails() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id: string; grade?: string; subject?: string }>();
  const classId = params.id;

  // Initialize class info only once (avoid infinite loop)
  const [classInfo] = useState({
    grade: params.grade || "Grade 10",
    subject: params.subject || "Mathematics",
    learnersCount: 32,
    testsConducted: 5,
    average: "87%",
  });

  // Learners list
  const [learners, setLearners] = useState<Learner[]>([
  { id: "1", name: "Amahle Mbatha", grade: classInfo.grade, marks: 88 },
  { id: "2", name: "Xolelwa Sithole", grade: classInfo.grade, marks: 92 },
  { id: "3", name: "Amahle Makhoba", grade: classInfo.grade, marks: 79 },
  { id: "4", name: "Letho Mbatha", grade: classInfo.grade, marks: 85 },
  { id: "5", name: "Thandiwe Zulu", grade: classInfo.grade, marks: 90 },
  { id: "6", name: "Sipho Dlamini", grade: classInfo.grade, marks: 76 },
  { id: "7", name: "Nomvula Ngcobo", grade: classInfo.grade, marks: 81 },
  { id: "8", name: "Bongani Khumalo", grade: classInfo.grade, marks: 95 },
  { id: "9", name: "Sanele Mthembu", grade: classInfo.grade, marks: 87 },
  { id: "10", name: "Zanele Ndlovu", grade: classInfo.grade, marks: 83 },
  { id: "11", name: "Thulani Shabalala", grade: classInfo.grade, marks: 78 },
  { id: "12", name: "Nosipho Moyo", grade: classInfo.grade, marks: 91 },
  { id: "13", name: "Bhekizitha Khumalo", grade: classInfo.grade, marks: 85 },
  { id: "14", name: "Nokuthula Dube", grade: classInfo.grade, marks: 89 },
  { id: "15", name: "Mthokozisi Zulu", grade: classInfo.grade, marks: 94 },
]);

  const renderLearner = ({ item }: { item: Learner }) => (
    <View style={styles.learnerCard}>
      <Text style={styles.learnerName}>{item.name}</Text>
      <Text style={styles.learnerMarks}>{item.marks} Marks</Text>
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => Alert.alert("Edit Learner Coming Soon")}
      >
        <Ionicons name="create-outline" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.title}>{classInfo.grade} {classInfo.subject}</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Class Stats */}
      <View style={styles.statsSection}>
        <View style={[styles.statCard, { backgroundColor: "#BFDBFE" }]}>
          <Text style={styles.statNumber}>{classInfo.learnersCount}</Text>
          <Text style={styles.statLabel}>Learners</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: "#FDE68A" }]}>
          <Text style={styles.statNumber}>{classInfo.testsConducted}</Text>
          <Text style={styles.statLabel}>Tests</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: "#A7F3D0" }]}>
          <Text style={styles.statNumber}>{classInfo.average}</Text>
          <Text style={styles.statLabel}>Average</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: "#2563EB" }]}
          onPress={() => Alert.alert("Manage Learners Coming Soon")}
        >
          <Ionicons name="people" size={18} color="white" />
          <Text style={styles.actionText}>Manage Learners</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: "#10B981" }]}
          onPress={() => Alert.alert("Add Test Coming Soon")}
        >
          <Ionicons name="add-circle-outline" size={18} color="white" />
          <Text style={styles.actionText}>Add Test</Text>
        </TouchableOpacity>
      </View>

      {/* Learners List */}
      <Text style={styles.sectionTitle}>Learners</Text>
      <FlatList
        data={learners}
        keyExtractor={(item) => item.id}
        renderItem={renderLearner}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between" },
  title: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  statsSection: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  statCard: { width: "32%", padding: 15, borderRadius: 15, justifyContent: "center", alignItems: "center" },
  statNumber: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  statLabel: { fontSize: 12, marginTop: 4, color: "#111827", textAlign: "center" },
  actionsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  actionBtn: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 10, paddingVertical: 10, borderRadius: 12 },
  actionText: { color: "white", fontWeight: "bold", marginLeft: 6 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#111827" },
  learnerCard: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15, backgroundColor: "white", borderRadius: 12, marginBottom: 12, elevation: 2 },
  learnerName: { fontSize: 16, fontWeight: "bold", color: "#111827" },
  learnerMarks: { fontSize: 14, color: "#6B7280" },
  editBtn: { backgroundColor: "#2563EB", padding: 6, borderRadius: 8 },
});