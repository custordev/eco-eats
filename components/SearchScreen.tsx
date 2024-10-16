import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Search, Clock, X } from "lucide-react-native";

const recentSearches = ["Apples", "Milk", "Bread", "Eggs"];
const popularCategories = [
  "Fruits",
  "Vegetables",
  "Dairy",
  "Bakery",
  "Meat",
  "Beverages",
];

export default function Favorites() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center p-4 bg-green-500">
          <TouchableOpacity>
            <ChevronLeft color="white" size={24} />
          </TouchableOpacity>
          <View className="flex-1 flex-row items-center bg-white rounded-full ml-4 px-4 py-2">
            <Search color="gray" size={20} />
            <TextInput
              className="flex-1 ml-2"
              placeholder="Search for products"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery !== "" && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <X color="gray" size={20} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <ScrollView className="flex-1 px-4 pt-4">
          {/* Recent Searches */}
          <View className="mb-6">
            <Text className="text-lg font-semibold mb-2">Recent Searches</Text>
            {recentSearches.map((search, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center py-2"
              >
                <Clock color="gray" size={16} />
                <Text className="ml-2">{search}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Popular Categories */}
          <View>
            <Text className="text-lg font-semibold mb-2">
              Popular Categories
            </Text>
            <View className="flex-row flex-wrap">
              {popularCategories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  className="bg-white rounded-full px-4 py-2 mr-2 mb-2"
                >
                  <Text>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
