import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Bell, Settings, ShoppingBag, Heart, CreditCard, HelpCircle, LogOut } from 'lucide-react-native';

const menuItems = [
  { icon: ShoppingBag, label: 'My Orders', color: 'text-blue-500' },
  { icon: Heart, label: 'Favorites', color: 'text-red-500' },
  { icon: CreditCard, label: 'Payment Methods', color: 'text-purple-500' },
  { icon: HelpCircle, label: 'Help Center', color: 'text-orange-500' },
  { icon: LogOut, label: 'Logout', color: 'text-gray-500' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <ScrollView>
        {/* Header */}
        <View className="flex-row justify-between items-center p-4 bg-green-500">
          <TouchableOpacity>
            <ChevronLeft color="white" size={24} />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-white">Profile</Text>
          <TouchableOpacity>
            <Bell color="white" size={24} />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View className="items-center mt-6">
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' }}
            className="w-24 h-24 rounded-full"
          />
          <Text className="text-xl font-bold mt-2">John Doe</Text>
          <Text className="text-gray-600">johndoe@example.com</Text>
          <TouchableOpacity className="flex-row items-center mt-2 bg-green-500 px-4 py-2 rounded-full">
            <Settings color="white" size={16} />
            <Text className="text-white ml-2">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View className="mt-6 px-4">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center py-4 border-b border-gray-200"
            >
              <item.icon color={item.color.split('-')[1]} size={24} />
              <Text className="ml-4 text-lg">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}