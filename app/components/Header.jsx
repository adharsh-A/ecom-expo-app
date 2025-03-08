import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = ({ title, cartItems, onCartPress, onBackPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton} onPress={onBackPress}>
        <View style={styles.backArrow}>
          <View style={styles.arrowLine} />
          <View style={styles.arrowHead} />
        </View>
      </TouchableOpacity>
      
      <Text style={styles.headerTitle}>{title}</Text>
      
      <TouchableOpacity style={styles.iconButton} onPress={onCartPress}>
        <View style={styles.cartIcon}>
          <View style={styles.cartBody} />
          <View style={styles.cartHandle} />
          {cartItems > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItems}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  // Back button arrow
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
  // Cart icon
  cartIcon: {
    width: 22,
    height: 22,
    position: 'relative',
  },
  cartBody: {
    width: 16,
    height: 12,
    borderWidth: 2,
    borderColor: 'white',
    borderTopWidth: 0,
    borderRadius: 2,
    position: 'absolute',
    bottom: 0,
    left: 3,
  },
  cartHandle: {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderColor: 'white',
    borderBottomWidth: 0,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 6,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CFF00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default Header;