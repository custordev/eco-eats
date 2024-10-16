import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Bell, Minus, Plus } from "lucide-react-native";

const cartItems = [
  {
    id: 1,
    name: "Orange",
    category: "Fruits",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Cauli Flower",
    category: "Veggies",
    price: 1.2,
    image:
      "https://images.unsplash.com/photo-1566842600175-97dca3c5e9a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Kiwi",
    category: "Fruits",
    price: 1.5,
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function CartScreen() {
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta),
    }));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0
  );
  const deliveryCharges = 2.0;
  const discount = 0.0;
  const total = subtotal + deliveryCharges - discount;

  return (
    <SafeAreaView className="flex-1 bg-green-500">
      <View className="flex-1 bg-green-50">
        {/* Header */}
        <View className="flex-row justify-between items-center p-4 bg-green-500">
          <TouchableOpacity>
            <ChevronLeft color="white" size={24} />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-white">Cart</Text>
          <TouchableOpacity>
            <Bell color="white" size={24} />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-4 pt-4">
          {/* Cart Items */}
          {cartItems.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center bg-white p-3 rounded-lg mb-3"
            >
              <Image
                source={{ uri: item.image }}
                className="w-16 h-16 rounded-lg mr-3"
              />
              <View className="flex-1">
                <Text className="font-semibold">{item.name}</Text>
                <Text className="text-gray-500">{item.category}</Text>
                <Text className="text-green-600 font-semibold">
                  ${item.price.toFixed(2)}/KG
                </Text>
              </View>
              <View className="flex-row items-center border border-gray-300 rounded-full">
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, -1)}
                  className="p-2"
                >
                  <Minus color="black" size={16} />
                </TouchableOpacity>
                <Text className="px-3">
                  {/* {quantities[item.id]} */}
                   2KG</Text>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, 1)}
                  className="p-2"
                >
                  <Plus color="black" size={16} />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Promo Code */}
          <View className="flex-row bg-white rounded-lg overflow-hidden mb-4">
            <TextInput
              className="flex-1 p-3 text-gray-700"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChangeText={setPromoCode}
            />
            <TouchableOpacity className="bg-green-500 justify-center px-4">
              <Text className="text-white font-semibold">Apply</Text>
            </TouchableOpacity>
          </View>

          {/* Order Summary */}
          <View className="bg-white p-4 rounded-lg mb-4">
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Sub Total</Text>
              <Text className="font-semibold">${subtotal.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Delivery Charges</Text>
              <Text className="font-semibold">
                ${deliveryCharges.toFixed(2)}
              </Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-gray-600">Discount</Text>
              <Text className="font-semibold">${discount.toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-semibold">Final Total</Text>
              <Text className="font-semibold">${total.toFixed(2)}</Text>
            </View>
          </View>
        </ScrollView>

        {/* Checkout Button */}
        <View className="p-4 bg-white">
          <TouchableOpacity className="bg-green-500 py-3 rounded-full">
            <Text className="text-white text-center font-semibold text-lg">
              Checkout ${total.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
