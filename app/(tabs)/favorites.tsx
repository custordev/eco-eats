import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Bell, Heart, Star } from "lucide-react-native";

const favoriteItems = [
  {
    id: 1,
    name: "Fresh Oranges",
    price: 2.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Ripe Bananas",
    price: 1.99,
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Fresh Broccoli",
    price: 3.49,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Whole Milk",
    price: 2.5,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Spinach Leaves",
    price: 2.99,
    rating: 4.5,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Chicken Breast",
    price: 2.99,
    rating: 4.5,
    category: "Meat",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function FavoritesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center p-4 bg-green-500">
          <TouchableOpacity>
            <ChevronLeft color="white" size={24} />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-white">Favorites</Text>
          <TouchableOpacity>
            <Bell color="white" size={24} />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-4 pt-4">
          <View className="flex-row flex-wrap justify-between">
            {favoriteItems.map((item) => (
              <View
                key={item.id}
                className="w-[48%] bg-white rounded-lg mb-4 overflow-hidden"
              >
                <View className="relative">
                  <Image
                    source={{ uri: item.image }}
                    className="w-full h-32 rounded-t-lg"
                  />
                  <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <Heart color="red" fill="red" size={16} />
                  </TouchableOpacity>
                </View>
                <View className="p-2">
                  <Text className="font-semibold">{item.name}</Text>
                  <View className="flex-row items-center my-1">
                    <Star color="#FFD700" fill="#FFD700" size={12} />
                    <Text className="ml-1 text-xs text-gray-600">
                      {item.rating}
                    </Text>
                  </View>
                  <Text className="text-green-600 font-semibold">
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
