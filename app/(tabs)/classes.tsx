import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type ClassType = {
  id: string;
  grade: string;
  subject: string;
  learners: number;
  tests: number;
  average: string;
};

export default function Classes() {
  const router = useRouter();

  const [classes, setClasses] = useState<ClassType[]>([
    { id: "1", grade: "Grade 10", subject: "Mathematics", learners: 32, tests: 5, average: "87%" },
    { id: "2", grade: "Grade 10", subject: "Physical Science", learners: 28, tests: 4, average: "83%" },
    { id: "3", grade: "Grade 11", subject: "Mathematics", learners: 30, tests: 6, average: "85%" },
    { id: "4", grade: "Grade 11", subject: "Physical Science", learners: 27, tests: 5, average: "82%" },
    { id: "5", grade: "Grade 12", subject: "Mathematics", learners: 35, tests: 6, average: "90%" },
    { id: "6", grade: "Grade 12", subject: "Physical Science", learners: 33, tests: 6, average: "88%" },
  ]);

  const renderItem = ({ item }: { item: ClassType }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() =>
        router.push({
          pathname: "/class/[id]",
          params: { id: item.id, grade: item.grade, subject: item.subject },
        })
      }
    >
      <Text style={styles.classTitle}>{item.grade} {item.subject}</Text>

      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: "#BFDBFE" }]}>
          <Text style={styles.statNumber}>{item.learners}</Text>
          <Text style={styles.statLabel}>Learners</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: "#FDE68A" }]}>
          <Text style={styles.statNumber}>{item.tests}</Text>
          <Text style={styles.statLabel}>Tests</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: "#A7F3D0" }]}>
          <Text style={styles.statNumber}>{item.average}</Text>
          <Text style={styles.statLabel}>Average</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: "#2563EB" }]}
          onPress={(e) => {
            e.stopPropagation();
            router.push({
              pathname: "/class/[id]",
              params: { id: item.id, grade: item.grade, subject: item.subject },
            });
          }}
        >
          <Ionicons name="people" size={18} color="white" />
          <Text style={styles.actionText}>Manage Learners</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: "#10B981" }]}
          onPress={(e) => {
            e.stopPropagation();
            Alert.alert("Add new test / assignment coming soon");
          }}
        >
          <Ionicons name="add-circle-outline" size={18} color="white" />
          <Text style={styles.actionText}>Add Test</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>My Classes</Text>
        <TouchableOpacity
          style={styles.addClassBtn}
          onPress={() => Alert.alert("Add New Class Coming Soon")}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addClassText}>Add Class</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={classes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6", paddingHorizontal: 20, paddingTop: 20 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#111827" },
  addClassBtn: { flexDirection: "row", alignItems: "center", backgroundColor: "#2563EB", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, elevation: 3 },
  addClassText: { color: "white", fontWeight: "bold", marginLeft: 6 },
  card: { backgroundColor: "white", borderRadius: 16, padding: 20, marginBottom: 20, elevation: 3 },
  classTitle: { fontSize: 18, fontWeight: "bold", color: "#2563EB", marginBottom: 12 },
  statsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  statCard: { width: "32%", padding: 10, borderRadius: 12, alignItems: "center" },
  statNumber: { fontSize: 16, fontWeight: "bold", color: "#111827" },
  statLabel: { fontSize: 12, color: "#111827", marginTop: 4, textAlign: "center" },
  actionsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  actionBtn: { flexDirection: "row", alignItems: "center", flex: 1, marginRight: 10, paddingVertical: 8, borderRadius: 12, justifyContent: "center" },
  actionText: { color: "white", fontWeight: "bold", marginLeft: 6, fontSize: 14 },
});