import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import Header from "../../components/Header";
import { useRouter } from "expo-router";

// Cart item component
const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemDetails}>
          Size: {item.size} | Color: {item.color}
        </Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
      </View>
      
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Text style={styles.removeButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

const ShoppingCart = () => {
  const router = useRouter();
  const cart = [
    {
      id: '1',
      name: 'Premium Headphones',
      image: 'https://i.pinimg.com/736x/89/8b/ae/898baea3e6b9e261358d71018bdfdda2.jpg',
      size: 'One Size',
      color: 'Black',
      price: 199.99
    },
    {
      id: '2',
      name: 'Wireless Earbuds',
      image: 'https://i.pinimg.com/736x/0a/1b/e2/0a1be2b731cc427e9e9122605901dbbc.jpg',
      size: 'Small',
      color: 'White',
      price: 129.99
    }
  ];
  
  const removeFromCart = (id) => {
    // This would be implemented in a real app
    console.log('Remove item', id);
  };
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  
  return (
    <View style={styles.container}>
      <Header 
        title="Shopping Cart" 
        cartItems={cart.length} 
        onCartPress={() => {}}
        onBackPress={() => router.back()}
      />
      
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <CartItem 
                item={item} 
                onRemove={() => removeFromCart(item.id)} 
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.cartList}
          />
          
          <View style={styles.cartSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${totalPrice.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping</Text>
              <Text style={styles.summaryValue}>$0.00</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${totalPrice.toFixed(2)}</Text>
            </View>
            
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <TouchableOpacity 
            style={styles.continueShoppingButton}
            onPress={() => router.push('/listing')}
          >
            <Text style={styles.continueShoppingButtonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },
  cartList: {
    padding: 15,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemDetails: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 5,
  },
  cartItemPrice: {
    color: 'white',
    fontSize: 16,
  },
  removeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartSummary: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 10,
    marginTop: 10,
  },
  summaryLabel: {
    color: '#ccc',
    fontSize: 16,
  },
  summaryValue: {
    color: 'white',
    fontSize: 16,
  },
  totalLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    color: '#4CFF00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: "#4CFF00",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  continueShoppingButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  continueShoppingButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ShoppingCart;