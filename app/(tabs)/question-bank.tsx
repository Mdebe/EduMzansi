import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Subject = "Maths" | "Science";
type QuestionType = "MCQ" | "Structured" | "StepByStep" | "Practical" | "Graph";

export type Question = {
  id: string;
  grade: string;
  subject: Subject;
  topic: string;
  type: QuestionType;
  questionText: string;
};

export default function QuestionBank() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const [questions, setQuestions] = useState<Question[]>([
    { id: "1", grade: "Grade 10", subject: "Maths", topic: "Algebra", type: "MCQ", questionText: "Solve: 2x + 3 = 11" },
    { id: "2", grade: "Grade 12", subject: "Maths", topic: "Calculus", type: "Structured", questionText: "Find the derivative of f(x) = x² + 3x" },
  ]);

  const filteredQuestions = useMemo(
    () => questions.filter(q => q.questionText.toLowerCase().includes(search.toLowerCase())),
    [search, questions]
  );

  const toggleSelect = (id: string) => {
    if (!selectionMode) {
      router.push({
        pathname: "/question/question-preview/[id]",
        params: { id },
      });
      return;
    }
    setSelectedQuestions(prev =>
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const deleteQuestion = (id: string) => {
    Alert.alert("Delete", "Are you sure?", [
      { text: "Cancel" },
      { text: "Delete", onPress: () => setQuestions(prev => prev.filter(q => q.id !== id)) },
    ]);
  };

  const generateTest = () => {
    if (!selectedQuestions.length) {
      Alert.alert("Select at least one question");
      return;
    }

    // Navigate to test generation screen (example)
     

    setSelectionMode(false);
    setSelectedQuestions([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {selectionMode ? `${selectedQuestions.length} Selected` : "Question Bank"}
      </Text>

      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#6B7280" />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Generate Test Button */}
      {selectionMode && (
        <TouchableOpacity style={styles.generateBtn} onPress={generateTest}>
          <Text style={styles.generateText}>Generate Test</Text>
        </TouchableOpacity>
      )}

      {/* Questions List */}
      <FlatList
        data={filteredQuestions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const isSelected = selectedQuestions.includes(item.id);

          return (
            <TouchableOpacity
              style={[styles.card, isSelected && styles.selectedCard]}
              onPress={() => toggleSelect(item.id)}
              onLongPress={() => setSelectionMode(true)}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.topic}>{item.topic}</Text>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeText}>{item.type}</Text>
                </View>
              </View>

              <Text style={styles.questionText}>{item.questionText}</Text>

              <View style={styles.metaRow}>
                <Text style={styles.metaText}>{item.grade}</Text>
                <Text style={styles.metaText}>{item.subject}</Text>
              </View>

              {!selectionMode && (
                <View style={styles.actions}>
                  <TouchableOpacity
                    onPress={() =>
                      router.push({
                        pathname: "/question/add-question",
                        params: { id: item.id }, // edit question
                      })
                    }
                  >
                    <Ionicons name="create-outline" size={20} color="#2563EB" />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => deleteQuestion(item.id)}>
                    <Ionicons name="trash-outline" size={20} color="#EF4444" />
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/question/add-question")}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6", padding: 16 },

  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#111827" },

  searchBox: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", paddingHorizontal: 12, borderRadius: 12, elevation: 2 },
  searchInput: { flex: 1, marginLeft: 8, height: 40 },

  card: { backgroundColor: "#fff", padding: 15, borderRadius: 16, marginBottom: 12, elevation: 3 },
  selectedCard: { borderWidth: 2, borderColor: "#2563EB" },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  topic: { fontWeight: "bold", color: "#2563EB" },
  typeBadge: { backgroundColor: "#DBEAFE", paddingHorizontal: 8, borderRadius: 12 },
  typeText: { fontSize: 12, color: "#1E40AF" },
  questionText: { fontSize: 14, marginBottom: 8, color: "#111827" },
  metaRow: { flexDirection: "row", justifyContent: "space-between" },
  metaText: { fontSize: 12, color: "#6B7280" },
  actions: { flexDirection: "row", justifyContent: "flex-end", marginTop: 8, gap: 15 },
  generateBtn: { backgroundColor: "#2563EB", padding: 10, borderRadius: 12, marginVertical: 10 },
  generateText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  fab: { position: "absolute", bottom: 25, right: 25, backgroundColor: "#2563EB", width: 60, height: 60, borderRadius: 30, justifyContent: "center", alignItems: "center", elevation: 6 },
});