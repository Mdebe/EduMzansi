// app/teacher/questionBank.tsx
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { questions } from "../sampleQuestions";
import { Ionicons } from "@expo/vector-icons";

export default function QuestionBank() {
  const renderItem = ({ item }: { item: typeof questions[0] }) => (
    <View style={styles.card}>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.topic}>{item.topic}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.question}>{item.questionText}</Text>
      <TouchableOpacity
        style={styles.viewBtn}
        onPress={() => Alert.alert("Solution", item.solution || "No solution provided")}
      >
        <Ionicons name="eye-outline" size={16} color="white" />
        <Text style={styles.viewText}>View Solution</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F3F4F6" },
  card: { backgroundColor: "white", padding: 16, borderRadius: 12, marginBottom: 16, elevation: 2 },
  subject: { fontWeight: "bold", color: "#2563EB" },
  topic: { fontSize: 14, color: "#111827" },
  type: { fontSize: 12, color: "#6B7280", marginBottom: 4 },
  question: { fontSize: 16, marginBottom: 8 },
  viewBtn: { flexDirection: "row", alignItems: "center", backgroundColor: "#10B981", padding: 6, borderRadius: 8, alignSelf: "flex-start" },
  viewText: { color: "white", marginLeft: 4, fontSize: 14 },
});