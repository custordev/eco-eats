import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Bell, Heart, Star, Plus } from "lucide-react-native";

const fruits = [
  {
    id: 1,
    name: "Orange",
    price: 2.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Banana",
    price: 1.0,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Kiwi",
    price: 1.5,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l3aXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Avocado",
    price: 5.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Lemon",
    price: 1.2,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1582087463261-ddea03f80e5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Strawberry",
    price: 3.9,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function FruitsCategoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-green-500">
      <View className="flex-1 bg-green-50">
        {/* Header */}
        <View className="flex-row justify-between items-center p-4 bg-green-500">
          <TouchableOpacity>
            <ChevronLeft color="white" size={24} />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-white">Fruits</Text>
          <TouchableOpacity>
            <Bell color="white" size={24} />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-4 pt-4">
          <View className="flex-row flex-wrap justify-between">
            {fruits.map((fruit) => (
              <View
                key={fruit.id}
                className="w-[48%] bg-white rounded-lg mb-4 overflow-hidden"
              >
                <View className="relative">
                  <Image
                    source={{ uri: fruit.image }}
                    className="w-full h-32 rounded-t-lg"
                  />
                  <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <Heart color="green" size={16} />
                  </TouchableOpacity>
                </View>
                <View className="p-2">
                  <Text className="font-semibold">{fruit.name}</Text>
                  <View className="flex-row items-center my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        color={i < fruit.rating ? "#FFD700" : "#D3D3D3"}
                        fill={i < fruit.rating ? "#FFD700" : "#D3D3D3"}
                      />
                    ))}
                  </View>
                  <View className="flex-row justify-between items-center mt-1">
                    <Text className="text-green-600 font-semibold">
                      ${fruit.price.toFixed(2)}/KG
                    </Text>
                    <TouchableOpacity className="bg-green-500 rounded-full p-1">
                      <Plus color="white" size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
