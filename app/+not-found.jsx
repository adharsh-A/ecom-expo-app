import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>Page Not Found</Text>
        <Text style={styles.description}>
          The page you're looking for doesn't exist or has been moved.
        </Text>

        <Link href="/" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Go Home</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E293B", // Dark modern background
    padding: 20,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#FACC15", // Bright yellow for contrast
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#E5E7EB",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FACC15",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
});
