import { Stack } from "expo-router";
import { StatusBar, View, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// If using Expo Router, import your CSS file in the app/_layout.tsx file



export default function Layout() {
  const colorScheme = useColorScheme(); // Detects system theme (dark/light)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme === "dark" ? "#121212" : "#fff" }}>
      <StatusBar hidden={false} barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} />

      <Stack
        screenOptions={{
          headerShown: false, // Change to true if you want headers for screens
        }}
      >
      </Stack>
    </SafeAreaView>
  );
}



// //layout for subfolder
// import { Stack } from "expo-router";
// import { StatusBar, View, Text } from "react-native";

// export default function Layout() {
//   // Hide status bar for all screens in this stack
//   StatusBar.setHidden(true);

//   return (
//     <>
//       <Stack
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "black",
//           },
//           headerTintColor: "black",
//           headerTitleStyle: {
//             fontWeight: "bold",
//           },
//           // Show header for all screens
//           headerShown: false,
//         }}
//       />
//     </>
//   );
// }