import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeft,
  Bell,
  Star,
  Minus,
  Plus,
  Heart,
} from "lucide-react-native";

export default function ProductDetailsScreen() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <ScrollView>
        {/* Header */}
        <View className="flex-row justify-between items-center p-4">
          <TouchableOpacity>
            <ChevronLeft color="black" size={24} />
          </TouchableOpacity>
          <Text className="text-lg font-semibold">Details</Text>
          <TouchableOpacity>
            <Bell color="black" size={24} />
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
          }}
          className="w-full h-64 bg-white"
          resizeMode="contain"
        />

        {/* Product Details */}
        <View className="bg-white p-4 rounded-t-3xl -mt-4">
          <Text className="text-2xl font-bold mb-2">Fresh Orange</Text>
          <View className="flex-row items-center mb-2">
            {[1, 2, 3, 4].map((_, index) => (
              <Star key={index} color="#FFD700" fill="#FFD700" size={20} />
            ))}
            <Star color="#FFD700" size={20} />
          </View>
          <Text className="text-green-600 text-xl font-bold mb-4">
            $2.99/KG
          </Text>

          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center border border-gray-300 rounded-full">
              <TouchableOpacity onPress={decrementQuantity} className="p-2">
                <Minus color="black" size={20} />
              </TouchableOpacity>
              <Text className="px-4 text-lg">{quantity} KG</Text>
              <TouchableOpacity onPress={incrementQuantity} className="p-2">
                <Plus color="black" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <Text className="font-bold text-lg mb-2">Product Details</Text>
          <Text className="text-gray-600 mb-2">
            Orange is a vibrant and juicy citrus fruit, known for its refreshing
            flavor and bright color. With a tangy savory sweetness, it adds a
            burst of freshness to both sweet and savory dishes. The peel of an
            orange is often used in cooking and baking to impart a zesty...
          </Text>
          <TouchableOpacity>
            <Text className="text-green-600 font-semibold">Read More</Text>
          </TouchableOpacity>

          {/* Related Products */}
          <Text className="font-bold text-lg mt-4 mb-2">Related Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {["Lemon", "Lime", "Grapefruit"].map((item, index) => (
              <View key={index} className="mr-4 items-center">
                <Image
                  source={{
                    uri: `https://source.unsplash.com/100x100/?${item}`,
                  }}
                  className="w-20 h-20 rounded-lg mb-2"
                />
                <Text>{item}</Text>
                <TouchableOpacity className="absolute top-1 right-1 bg-white rounded-full p-1">
                  <Heart color="green" size={16} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View className="bg-white p-4 flex-row justify-between items-center">
        <View>
          <Text className="text-gray-600">Total Price</Text>
          <Text className="text-xl font-bold text-green-600">
            ${(2.99 * quantity).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity className="bg-green-600 px-6 py-3 rounded-full">
          <Text className="text-white font-bold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
