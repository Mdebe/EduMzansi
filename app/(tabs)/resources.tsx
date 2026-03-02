import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const placeholderImage = "https://via.placeholder.com/150";

type Subject = "Maths" | "Science";

type Topic = {
  id: string;
  grade: string;
  subject: Subject;
  name: string;
  image: string;
};

export default function Resources() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const allTopics: Topic[] = [
  // ======================
  // 🔵 GRADE 8
  // ======================

  // Maths
  { id: "m8-1", grade: "Grade 8", subject: "Maths", name: "Whole Numbers", image: placeholderImage },
  { id: "m8-2", grade: "Grade 8", subject: "Maths", name: "Integers", image: placeholderImage },
  { id: "m8-3", grade: "Grade 8", subject: "Maths", name: "Algebraic Expressions", image: placeholderImage },
  { id: "m8-4", grade: "Grade 8", subject: "Maths", name: "Geometry of 2D Shapes", image: placeholderImage },
  { id: "m8-5", grade: "Grade 8", subject: "Maths", name: "Data Handling", image: placeholderImage },

  // Science
  { id: "s8-1", grade: "Grade 8", subject: "Science", name: "Matter and Materials", image: placeholderImage },
  { id: "s8-2", grade: "Grade 8", subject: "Science", name: "Energy and Change", image: placeholderImage },
  { id: "s8-3", grade: "Grade 8", subject: "Science", name: "Earth and Beyond", image: placeholderImage },
  { id: "s8-4", grade: "Grade 8", subject: "Science", name: "Life and Living", image: placeholderImage },

  // ======================
  // 🟢 GRADE 9
  // ======================

  { id: "m9-1", grade: "Grade 9", subject: "Maths", name: "Exponents", image: placeholderImage },
  { id: "m9-2", grade: "Grade 9", subject: "Maths", name: "Linear Equations", image: placeholderImage },
  { id: "m9-3", grade: "Grade 9", subject: "Maths", name: "Probability", image: placeholderImage },
  { id: "m9-4", grade: "Grade 9", subject: "Maths", name: "Transformation Geometry", image: placeholderImage },

  { id: "s9-1", grade: "Grade 9", subject: "Science", name: "Atomic Structure", image: placeholderImage },
  { id: "s9-2", grade: "Grade 9", subject: "Science", name: "Forces and Motion", image: placeholderImage },
  { id: "s9-3", grade: "Grade 9", subject: "Science", name: "Chemical Reactions", image: placeholderImage },
  { id: "s9-4", grade: "Grade 9", subject: "Science", name: "Human Body Systems", image: placeholderImage },

  // ======================
  // 🟡 GRADE 10
  // ======================

  { id: "m10-1", grade: "Grade 10", subject: "Maths", name: "Algebra", image: placeholderImage },
  { id: "m10-2", grade: "Grade 10", subject: "Maths", name: "Functions", image: placeholderImage },
  { id: "m10-3", grade: "Grade 10", subject: "Maths", name: "Trigonometry", image: placeholderImage },
  { id: "m10-4", grade: "Grade 10", subject: "Maths", name: "Euclidean Geometry", image: placeholderImage },
  { id: "m10-5", grade: "Grade 10", subject: "Maths", name: "Statistics", image: placeholderImage },

  { id: "s10-1", grade: "Grade 10", subject: "Science", name: "Matter and Materials", image: placeholderImage },
  { id: "s10-2", grade: "Grade 10", subject: "Science", name: "Energy and Change", image: placeholderImage },
  { id: "s10-3", grade: "Grade 10", subject: "Science", name: "Planet Earth", image: placeholderImage },
  { id: "s10-4", grade: "Grade 10", subject: "Science", name: "Life and Living", image: placeholderImage },

  // ======================
  // 🟣 GRADE 11
  // ======================

  { id: "m11-1", grade: "Grade 11", subject: "Maths", name: "Functions and Graphs", image: placeholderImage },
  { id: "m11-2", grade: "Grade 11", subject: "Maths", name: "Exponents and Logarithms", image: placeholderImage },
  { id: "m11-3", grade: "Grade 11", subject: "Maths", name: "Analytical Geometry", image: placeholderImage },
  { id: "m11-4", grade: "Grade 11", subject: "Maths", name: "Trigonometric Identities", image: placeholderImage },

  { id: "s11-1", grade: "Grade 11", subject: "Science", name: "Kinematics", image: placeholderImage },
  { id: "s11-2", grade: "Grade 11", subject: "Science", name: "Chemical Bonding", image: placeholderImage },
  { id: "s11-3", grade: "Grade 11", subject: "Science", name: "Electrostatics", image: placeholderImage },
  { id: "s11-4", grade: "Grade 11", subject: "Science", name: "Genetics", image: placeholderImage },

  // ======================
  // 🔴 GRADE 12
  // ======================

  { id: "m12-1", grade: "Grade 12", subject: "Maths", name: "Calculus", image: placeholderImage },
  { id: "m12-2", grade: "Grade 12", subject: "Maths", name: "Financial Maths", image: placeholderImage },
  { id: "m12-3", grade: "Grade 12", subject: "Maths", name: "Probability", image: placeholderImage },
  { id: "m12-4", grade: "Grade 12", subject: "Maths", name: "3D Geometry", image: placeholderImage },

  { id: "s12-1", grade: "Grade 12", subject: "Science", name: "Organic Chemistry", image: placeholderImage },
  { id: "s12-2", grade: "Grade 12", subject: "Science", name: "Electric Circuits", image: placeholderImage },
  { id: "s12-3", grade: "Grade 12", subject: "Science", name: "Momentum and Impulse", image: placeholderImage },
  { id: "s12-4", grade: "Grade 12", subject: "Science", name: "Evolution", image: placeholderImage },
];

  const filteredTopics = allTopics.filter(
    t =>
      t.name.toLowerCase().includes(searchText.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchText.toLowerCase()) ||
      t.grade.toLowerCase().includes(searchText.toLowerCase())
  );

  const grades = ["Grade 10", "Grade 11", "Grade 12"];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>CAPS Curriculum Resources</Text>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#6B7280" style={{ marginHorizontal: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search topic, grade, or subject"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {grades.map((grade) => {
        const gradeTopics = filteredTopics.filter(t => t.grade === grade);
        if (!gradeTopics.length) return null;
        return (
          <View key={grade}>
            <Text style={styles.gradeTitle}>{grade}</Text>
            {gradeTopics.map((topic) => (
              <TouchableOpacity
                key={topic.id}
                style={styles.card}
                onPress={() => router.push(`/resources/${topic.id}`)}
              >
                <Image source={{ uri: topic.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{topic.name}</Text>
                  <Text style={styles.cardSub}>{topic.subject}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#6B7280" />
              </TouchableOpacity>
            ))}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6", padding: 16 },
  screenTitle: { fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 16 },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 8,
    marginBottom: 16,
    elevation: 2,
  },
  searchInput: { flex: 1, height: 40, fontSize: 14, color: "#111827" },

  gradeTitle: { fontSize: 20, fontWeight: "bold", color: "#2563EB", marginBottom: 8, marginTop: 12 },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
  },
  cardImage: { width: 60, height: 60, borderRadius: 12, marginRight: 12 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#111827" },
  cardSub: { fontSize: 12, color: "#6B7280", marginTop: 4 },
});