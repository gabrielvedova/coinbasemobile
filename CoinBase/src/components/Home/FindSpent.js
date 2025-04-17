import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default (props) => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.search}>
      <AntDesign name="search1" size={24} color="#8696BB" />
      <TextInput
        style={{
          width: "90%",
          height: 40,
          paddingLeft: 10,
        }}
        placeholder="Pesquisar"
        placeholderTextColor="#808080"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    height: 50,
    width: "90%",
    backgroundColor: "#FAFAFA",
    borderColor: "gray",
    paddingLeft: 10,
    borderRadius: 25,
  },
});
