import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation

export default function ProductCard() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
      <View style={styles.backArrow}>
            <View style={styles.arrowLine} />
            <View style={styles.arrowHead} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.shareIcon}>
            <View style={styles.shareLine} />
            <View style={styles.shareArrow} />
          </View>
        </TouchableOpacity>
      </View>
      
      {/* Product Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Air Max</Text>
        <Text style={styles.title}>Plus Comfort</Text>
      </View>
      
      {/* Info Boxes */}
      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Size</Text>
          <Text style={styles.infoValue}>8.5</Text>
        </View>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Price</Text>
          <Text style={styles.infoValue}>$175</Text>
        </View>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Model</Text>
          <Text style={styles.infoValue}>Sport</Text>
        </View>
      </View>
      
      {/* Main Product Image - Positioned as background element */}
      <View style={styles.productImageContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/736x/ac/30/49/ac30499143047da2dd8cc5f8793402d6.jpg' }} 
          style={styles.productImage} 
          resizeMode="contain"
        />
      </View>
      
      {/* Color Variants */}
      <View style={styles.variantsContainer}>
        <TouchableOpacity style={styles.variantBox}>
          <View style={[styles.variantImage, styles.variant1]} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.variantBox}>
          <View style={[styles.variantImage, styles.variant2]} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.variantBox}>
          <View style={[styles.variantImage, styles.variant3]} />
        </TouchableOpacity>
      </View>
      
      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
    // Simple gradient effect
    borderWidth: 1,
    borderColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomColor: '#32CD32',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    zIndex: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  // Custom back arrow icon
  backArrow: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  arrowLine: {
    width: 12,
    height: 2,
    backgroundColor: 'white',
    position: 'absolute',
    top: 9,
    left: 4,
  },
  arrowHead: {
    width: 8,
    height: 8,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: 'white',
    transform: [{ rotate: '-45deg' }],
    position: 'absolute',
    top: 6,
    left: 4,
  },
  // Custom share icon
  shareIcon: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  shareLine: {
    width: 2,
    height: 12,
    backgroundColor: 'white',
    position: 'absolute',
    top: 4,
    left: 9,
  },
  shareArrow: {
    width: 10,
    height: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: 'white',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    top: 1,
    left: 5,
  },
  productImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    opacity: 0.8, // Slightly transparent to blend with background
  },
  productImage: {
    width: '100%',
    height: '80%',
  },
  titleContainer: {
    marginBottom: 20,
    zIndex: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    lineHeight: 38,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 20,
    zIndex: 2,
  },
  infoBox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 10,
  },
  infoLabel: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 4,
  },
  infoValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  variantsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    marginBottom: 20,
    paddingHorizontal: 20,
    zIndex: 2,
  },
  variantBox: {
    width: 70,
    height: 70,
    borderRadius: 14,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  variantImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  // Using background colors to simulate the images
  variant1: {
    backgroundColor: "#333",
    borderWidth: 1,
    borderColor: "#4CFF00",
  },
  variant2: {
    backgroundColor: "#444",
    borderWidth: 1,
    borderColor: "#FF4500",
  },
  variant3: {
    backgroundColor: "#555",
    borderWidth: 1,
    borderColor: "#1E90FF",
  },
  orderButton: {
    backgroundColor: "#4CFF00",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    zIndex: 2,
  },
  orderButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});