import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Eye, EyeOff } from "lucide-react-native";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-green-500">
      <View className="flex-1 px-6 pt-10">
        <Text className="text-white text-4xl font-bold mb-2">Sign Up</Text>
        <Text className="text-white text-lg mb-8">
          To get more advantages sign up your accounts by filling in some
          informations
        </Text>

        <View className="bg-white rounded-xl p-6 mb-6">
          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Your Name</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3"
              value={name}
              onChangeText={setName}
              placeholder="Tanzir Fahad"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Email address</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-3"
              value={email}
              onChangeText={setEmail}
              placeholder="Fahadulxlab@gmail.com"
              keyboardType="email-address"
            />
          </View>

          <View className="mb-4">
            <Text className="text-gray-600 mb-2">Create a password</Text>
            <View className="relative">
              <TextInput
                className="border border-gray-300 rounded-lg p-3 pr-10"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                className="absolute right-3 top-3"
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff color="gray" size={24} />
                ) : (
                  <Eye color="gray" size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity className="bg-green-500 rounded-lg py-4 items-center">
            <Text className="text-white font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-white text-center mb-4">
          Other sign up options
        </Text>
        <View className="flex-row justify-center space-x-4">
          {["facebook", "google", "apple"].map((platform) => (
            <TouchableOpacity
              key={platform}
              className="bg-white rounded-full p-3"
            >
              <Image
                source={{ uri: `/placeholder.svg?height=24&width=24` }}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
