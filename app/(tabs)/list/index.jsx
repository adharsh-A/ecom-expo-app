import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import Header from "../../components/Header";
import products from "../../data/data.js";
import { useRouter } from "expo-router";

// Product card component for the listing
const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.productCard} onPress={onPress}>
      <Image 
        source={{ uri: product.image }} 
        style={styles.productCardImage} 
        resizeMode="cover"
      />
      <View style={styles.productCardInfo}>
        <Text style={styles.productCardName}>{product.name}</Text>
        <Text style={styles.productCardPrice}>${product.price}</Text>
        <View style={styles.productCardColors}>
          {product.colors.map((color, index) => (
            <View 
              key={index} 
              style={[styles.colorDot, { backgroundColor: color }]} 
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const ProductListing = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Header 
        title="Products" 
        showCart 
        onCartPress={() => router.push('./cart')}
        onBackPress={() => router.back()} // No action for back on main listing
      />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onPress={() => router.push({
              pathname: './product',
              params: { id: item.id }
            })}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },
  productList: {
    padding: 15,
  },
  productCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  productCardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productCardInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  productCardName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productCardPrice: {
    color: 'white',
    fontSize: 16,
  },
  productCardColors: {
    flexDirection: 'row',
    marginTop: 10,
  },
  colorDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default ProductListing;