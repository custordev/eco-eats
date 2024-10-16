import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeft,
  Bell,
  Search,
  Home,
  Heart,
  ShoppingCart,
  User,
  Star,
} from "lucide-react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  const categories = [
    {
      id: 1,
      name: "Fruits",
      slug: "fruits",
      imageUrl:
        "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBhcHBsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Vegetables",
      slug: "vegetables",
      imageUrl:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Meat",
      slug: "meat",
      imageUrl:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdW5kJTIwYmVlZnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Dairy",
      slug: "dairy",
      imageUrl:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Bakery",
      slug: "bakery",
      imageUrl:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "Beverages",
      slug: "beverages",
      imageUrl:
        "https://images.unsplash.com/photo-1603394630850-69b3ca8121ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhcmtsaW5nJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 7,
      name: "Snacks",
      slug: "snacks",
      imageUrl:
        "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwYmFyfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Frozen Foods",
      slug: "frozen-foods",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Fresh Oranges",
      slug: "fresh-oranges",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Ripe Bananas",
      slug: "ripe-bananas",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Green Apples",
      slug: "green-apples",
      category: "Fruits",
      image:
        "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBhcHBsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "Fresh Broccoli",
      slug: "fresh-broccoli",
      category: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Carrots",
      slug: "carrots",
      category: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      title: "Spinach Leaves",
      slug: "spinach-leaves",
      category: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      title: "Chicken Breast",
      slug: "chicken-breast",
      category: "Meat",
      image:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 8,
      title: "Ground Beef",
      slug: "ground-beef",
      category: "Meat",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdW5kJTIwYmVlZnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      title: "Salmon Fillet",
      slug: "salmon-fillet",
      category: "Meat",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww",
    },
    {
      id: 10,
      title: "Whole Milk",
      slug: "whole-milk",
      category: "Dairy",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 11,
      title: "Cheddar Cheese",
      slug: "cheddar-cheese",
      category: "Dairy",
      image:
        "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZGRhciUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 12,
      title: "Greek Yogurt",
      slug: "greek-yogurt",
      category: "Dairy",
      image:
        "https://images.unsplash.com/photo-1551219059-b5f8e7acee56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWslMjB5b2d1cnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 13,
      title: "Whole Wheat Bread",
      slug: "whole-wheat-bread",
      category: "Bakery",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hvbGUlMjB3aGVhdCUyMGJyZWFkfGVufDB8fDB8fHww",
    },
    {
      id: 14,
      title: "Croissants",
      slug: "croissants",
      category: "Bakery",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JvaXNzYW50fGVufDB8fDB8fHww",
    },
    {
      id: 15,
      title: "Baguette",
      slug: "baguette",
      category: "Bakery",
      image:
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFndWV0dGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 16,
      title: "Orange Juice",
      slug: "orange-juice",
      category: "Beverages",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 17,
      title: "Sparkling Water",
      slug: "sparkling-water",
      category: "Beverages",
      image:
        "https://images.unsplash.com/photo-1603394630850-69b3ca8121ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhcmtsaW5nJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 18,
      title: "Green Tea",
      slug: "green-tea",
      category: "Beverages",
      image:
        "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 19,
      title: "Potato Chips",
      slug: "potato-chips",
      category: "Snacks",
      image:
        "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90YXRvJTIwY2hpcHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 20,
      title: "Mixed Nuts",
      slug: "mixed-nuts",
      category: "Snacks",
      image:
        "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl4ZWQlMjBudXRzfGVufDB8fDB8fHww",
    },
    {
      id: 21,
      title: "Chocolate Bar",
      slug: "chocolate-bar",
      category: "Snacks",
      image:
        "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwYmFyfGVufDB8fDB8fHww",
    },
    {
      id: 22,
      title: "Frozen Pizza",
      slug: "frozen-pizza",
      category: "Frozen Foods",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 23,
      title: "Ice Cream",
      slug: "ice-cream",
      category: "Frozen Foods",
      image:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 24,
      title: "Frozen Vegetables Mix",
      slug: "frozen-vegetables-mix",
      category: "Frozen Foods",
      image:
        "https://images.unsplash.com/photo-1467453678174-768ec283a940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvemVuJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <View className="bg-[#019934]">
          {/* Header */}
          <View className="flex-row justify-between items-center px-4 py-2   ">
            <ChevronLeft color="white" size={24} />
            <View className="flex-1 items-center">
              <Text className=" text-sm text-white">Location</Text>
              <Text className=" font-bold text-white">Baridhara, Dhaka</Text>
            </View>
            <Bell color="white" size={24} />
          </View>

          {/* Search Bar */}
          <View className="mx-4 my-2 ">
            <View className="flex-row items-center bg-white rounded-full px-4 py-2">
              <Search color="gray" size={20} />
              <TextInput
                className="flex-1 ml-2 text-gray-700"
                placeholder="Search Your Groceries"
                placeholderTextColor="gray"
              />
            </View>
          </View>

          {/* Promotional Banner */}
          <View className="mx-4 my-2  rounded-lg p-4 flex-row items-center">
            <View className="flex-1">
              <Text className="text-white font-bold text-lg">
                Get 40% discount
              </Text>
              <Text className="text-white">on your first order from app.</Text>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2 mt-2 self-start">
                <Text className="text-green-500 font-bold">Shop Now</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../assets/images/banner.png")}
              className="w-24 h-24"
            />
          </View>
        </View>

        {/* Categories */}
        <View>
          <Text className="font-bold text-lg mx-4 mt-4 mb-2">Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4"
          >
            {categories.map((category) => (
              <Link
                href="/category/slug"
                key={category.id}
                className="items-center mr-4"
              >
                <View>
                  <View className="bg-white rounded-full p-3">
                    <Image
                      source={{ uri: category.imageUrl }}
                      className="w-10 h-10 rounded-full"
                    />
                  </View>
                  <Text className="mt-1">{category.name}</Text>
                </View>
              </Link>
            ))}
          </ScrollView>
        </View>

        {/* Popular Items */}
        <View className="flex flex-row gap-2 justify-between items-center py-8 px-4">
          <Text className=" font-bold text-lg mx-4 mt-4 mb-2">Popular</Text>
          <TouchableOpacity className="bg-green-500 rounded-lg p-2 mt-4 mx-4">
            <Text className="text-white text-center">All Products</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4 flex-row flex-wrap gap-5"
          >
            {products.slice(0, 8).map((product) => (
              <Link
                href="/product/slug"
                key={product.id}
                className="w-44 bg-white rounded-lg mb-4 overflow-hidden"
              >
                <View>
                  <View className="relative">
                    <Image
                      source={{ uri: product.image }}
                      className="w-44 h-32 rounded-t-lg"
                    />
                    <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-full p-1">
                      <Heart color="lime" fill="lime" size={16} />
                    </TouchableOpacity>
                  </View>
                  <View className="p-2">
                    <Text className="font-semibold">{product.title}</Text>
                    <View className=" my-1 flex flex-row justify-between items-center">
                      <Text> {product.category}</Text>
                      <View className="flex flex-row">
                        <Star color="#FFD700" fill="#FFD700" size={12} />
                        <Text className="ml-1 text-xs text-gray-600">34</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Link>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Navigation
      <View className="flex-row justify-around items-center bg-white py-2">
        <TouchableOpacity className="items-center">
          <Home color="green" size={24} />
          <Text className="text-green-500 text-xs">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Heart color="gray" size={24} />
          <Text className="text-gray-500 text-xs">Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <ShoppingCart color="gray" size={24} />
          <Text className="text-gray-500 text-xs">Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <User color="gray" size={24} />
          <Text className="text-gray-500 text-xs">Profile</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}
