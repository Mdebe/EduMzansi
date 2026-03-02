import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeTint = Colors[colorScheme ?? 'light'].tint;
  const inactiveTint = '#6B7280';
  const background = Colors[colorScheme ?? 'light'].background;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: activeTint,
        tabBarInactiveTintColor: inactiveTint,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
          backgroundColor: background,
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarButton: HapticTab, // haptic feedback on press
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />

      {/* Classes */}
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Classes',
          tabBarIcon: ({ color }) => <Ionicons name="school" size={28} color={color} />,
        }}
      />

      {/* Question Bank */}
      <Tabs.Screen
        name="question-bank"
        options={{
          title: 'Q Bank',
          tabBarIcon: ({ color }) => <Ionicons name="book" size={28} color={color} />,
        }}
      />

      {/* Resources */}
      <Tabs.Screen
        name="resources"
        options={{
          title: 'Resources',
          tabBarIcon: ({ color }) => <Ionicons name="folder" size={28} color={color} />,
        }}
      />

      {/* Analytics */}
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color }) => <MaterialIcons name="analytics" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}