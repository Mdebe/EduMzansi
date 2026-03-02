import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

type Subject = "Maths" | "Science";

type TopicContent = {
  id: string;
  grade: string;
  subject: Subject;
  name: string;
  formulas?: string[];        // For Maths
  steps?: string[];           // Step-by-step solutions
  practicals?: string[];      // For Science practicals
  notes?: string[];
};

// Full CAPS Curriculum Topics with mock content
const allTopics: TopicContent[] = [
  // Grade 10 Maths
  { id: "m10-1", grade: "Grade 10", subject: "Maths", name: "Algebra", formulas: ["(a+b)^2 = a^2 + 2ab + b^2"], steps: ["Identify variables", "Simplify", "Solve"], notes: ["Foundation for equations"] },
  { id: "m10-2", grade: "Grade 10", subject: "Maths", name: "Functions", formulas: ["f(x) = mx + c"], steps: ["Plot points", "Draw graph"], notes: ["Linear and quadratic"] },
  { id: "m10-3", grade: "Grade 10", subject: "Maths", name: "Euclidean Geometry", formulas: ["Sum of angles in triangle = 180°"], steps: ["Draw figure", "Apply theorems"], notes: ["Triangles, circles"] },
  { id: "m10-4", grade: "Grade 10", subject: "Maths", name: "Trigonometry", formulas: ["sin²θ + cos²θ = 1"], steps: ["Identify sides", "Apply ratios"], notes: ["Right triangles"] },
  { id: "m10-5", grade: "Grade 10", subject: "Maths", name: "Statistics", formulas: ["Mean = Σx/n"], steps: ["Collect data", "Compute mean"], notes: ["Data handling"] },

  // Grade 10 Science
  { id: "s10-1", grade: "Grade 10", subject: "Science", name: "Matter and Materials", practicals: ["Test solubility", "Observe reactions"], notes: ["Elements, compounds"] },
  { id: "s10-2", grade: "Grade 10", subject: "Science", name: "Energy and Change", practicals: ["Measure energy transfer"], notes: ["Work, power, energy"] },
  { id: "s10-3", grade: "Grade 10", subject: "Science", name: "Planet Earth", practicals: ["Rock classification"], notes: ["Geology basics"] },
  { id: "s10-4", grade: "Grade 10", subject: "Science", name: "Life and Living", practicals: ["Microscope observation"], notes: ["Cells and organisms"] },

  // Grade 11 Maths
  { id: "m11-1", grade: "Grade 11", subject: "Maths", name: "Algebra & Functions", formulas: ["Quadratic formula: x = (-b±√(b²-4ac))/2a"], steps: ["Identify coefficients", "Apply formula"], notes: ["Advanced algebra"] },
  { id: "m11-2", grade: "Grade 11", subject: "Maths", name: "Trigonometry", formulas: ["tan θ = sin θ / cos θ"], steps: ["Identify angles", "Apply ratios"], notes: ["Sine, Cosine, Tangent"] },
  { id: "m11-3", grade: "Grade 11", subject: "Maths", name: "Analytical Geometry", formulas: ["Distance = √((x2-x1)² + (y2-y1)²)"], steps: ["Plot points", "Compute distances"], notes: ["Coordinate plane"] },
  { id: "m11-4", grade: "Grade 11", subject: "Maths", name: "Statistics & Probability", formulas: ["P(E) = favorable/total"], steps: ["List outcomes", "Compute probability"], notes: ["Random experiments"] },

  // Grade 11 Science
  { id: "s11-1", grade: "Grade 11", subject: "Science", name: "Mechanics", practicals: ["Measure velocity", "Calculate acceleration"], notes: ["Motion, forces"] },
  { id: "s11-2", grade: "Grade 11", subject: "Science", name: "Chemical Reactions", practicals: ["Mix acids and bases"], notes: ["Reaction rates"] },
  { id: "s11-3", grade: "Grade 11", subject: "Science", name: "Electricity & Magnetism", practicals: ["Build simple circuits"], notes: ["Ohm's Law, Magnetism"] },
  { id: "s11-4", grade: "Grade 11", subject: "Science", name: "Life Processes", practicals: ["Microscopy of cells"], notes: ["Photosynthesis, respiration"] },

  // Grade 12 Maths
  { id: "m12-1", grade: "Grade 12", subject: "Maths", name: "Calculus", formulas: ["d/dx (x^n) = nx^(n-1)"], steps: ["Differentiate", "Simplify"], notes: ["Limits, derivatives"] },
  { id: "m12-2", grade: "Grade 12", subject: "Maths", name: "Functions & Graphs", formulas: ["f'(x) = derivative"], steps: ["Plot graphs", "Analyze behavior"], notes: ["Advanced functions"] },
  { id: "m12-3", grade: "Grade 12", subject: "Maths", name: "Probability & Statistics", formulas: ["P(E) = n(E)/n(S)"], steps: ["Compute probabilities"], notes: ["Combinatorics"] },
  { id: "m12-4", grade: "Grade 12", subject: "Maths", name: "Euclidean Geometry", formulas: ["Sum angles in polygon = (n-2)*180"], steps: ["Draw diagram", "Apply theorems"], notes: ["Complex shapes"] },

  // Grade 12 Science
  { id: "s12-1", grade: "Grade 12", subject: "Science", name: "Mechanics & Dynamics", practicals: ["Projectile motion experiments"], notes: ["Forces and motion"] },
  { id: "s12-2", grade: "Grade 12", subject: "Science", name: "Chemical Systems", practicals: ["Titration experiments"], notes: ["Acids, bases, reactions"] },
  { id: "s12-3", grade: "Grade 12", subject: "Science", name: "Electricity & Waves", practicals: ["Circuit measurements"], notes: ["AC/DC circuits, waves"] },
  { id: "s12-4", grade: "Grade 12", subject: "Science", name: "Life & Genetics", practicals: ["Genetics experiments"], notes: ["DNA, inheritance"] },
];

export default function TopicDetail() {
  const router = useRouter();
  const params = useLocalSearchParams<{ topicId: string }>();
  const topicId = params.topicId;

  const [topic, setTopic] = useState<TopicContent | null>(null);

  useEffect(() => {
    const found = allTopics.find(t => t.id === topicId);
    if (found) setTopic(found);
    else Alert.alert("Topic not found");
  }, [topicId]);

  if (!topic) return <View style={styles.container}><Text>Loading...</Text></View>;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.title}>{topic.grade} {topic.subject}</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.topicTitle}>{topic.name}</Text>

      {/* Notes */}
      {topic.notes && topic.notes.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          {topic.notes.map((note, idx) => (
            <Text key={idx} style={styles.textItem}>• {note}</Text>
          ))}
        </View>
      )}

      {/* Maths Formulas */}
      {topic.subject === "Maths" && topic.formulas && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formulas</Text>
          {topic.formulas.map((f, idx) => (
            <View key={idx} style={styles.card}><Text style={styles.cardText}>{f}</Text></View>
          ))}
        </View>
      )}

      {/* Step-by-step */}
      {topic.steps && topic.steps.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Step-by-Step Solutions</Text>
          {topic.steps.map((s, idx) => (
            <View key={idx} style={styles.card}><Text style={styles.cardText}>{s}</Text></View>
          ))}
        </View>
      )}

      {/* Science Practicals */}
      {topic.subject === "Science" && topic.practicals && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Practical Investigations</Text>
          {topic.practicals.map((p, idx) => (
            <View key={idx} style={styles.card}><Text style={styles.cardText}>{p}</Text></View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
  title: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  topicTitle: { fontSize: 22, fontWeight: "bold", color: "#2563EB", marginBottom: 12 },

  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827", marginBottom: 8 },
  card: { backgroundColor: "white", padding: 12, borderRadius: 12, marginBottom: 8, elevation: 2 },
  cardText: { fontSize: 14, color: "#111827" },
  textItem: { fontSize: 14, color: "#111827", marginBottom: 4 },
});