import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AddressCard({ endereco }) {
  if (!endereco) return null;
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Rua: {endereco.logradouro}</Text>
      <Text style={styles.text}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.text}>
        Cidade: {endereco.localidade} - {endereco.uf}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
