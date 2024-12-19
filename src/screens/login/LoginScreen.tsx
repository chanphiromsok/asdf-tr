import React from "react";
import { FlatList, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <FlatList
        data={Array.from({ length: 200 })}
        renderItem={(data) => {
          return (
            <View
              style={{
                flex: 1,
                height: 300,
                backgroundColor: data.index < 2 ? "blue" : "green",
              }}
            >
              <Text>{data.index}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default LoginScreen;
