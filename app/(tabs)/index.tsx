import React, { useEffect, useState } from "react";
import { View, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter, useRootNavigationState } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function Home() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [redirected, setRedirected] = useState(false); 

  useEffect(() => {
    if (navigationState?.key && !redirected) {
      setRedirected(true);
      router.replace("./start"); 
    }
  }, [navigationState?.key, redirected]); 

  return (
    <View style={styles.container}>
      {/* Hide the status bar */}
      <StatusBar hidden />
      <ExpoStatusBar hidden />

      {/* Loading Indicator */}
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

// Styles for better UX
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Dark background for better transition
  },
});



// import React, { useEffect } from "react";
// import { View, StatusBar } from "react-native";
// import { useRouter, useRootNavigationState } from "expo-router";
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";

// export default function Home() {
//   const router = useRouter();
//   const navigationState = useRootNavigationState(); // Check if router is ready

//   useEffect(() => {
//     if (navigationState?.key) {
//       router.replace("./login"); // Redirect to login once the router is ready
//     }
//   }, [navigationState?.key]);

//   return (
//     <View>
//       {/* Hide the status bar */}
//       <StatusBar hidden />
//       <ExpoStatusBar hidden />
//     </View>
//   );
// }