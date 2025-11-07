import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from "react-native";
import AddressCard from "../components/AddressCard";
import { buscarEnderecoPorCEP, calcularFreteMock } from "../services/correiosApi";

export default function HomeScreen() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [frete, setFrete] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleBuscarCep() {
    if (cep.length !== 8) {
      alert("Digite um CEP válido (8 dígitos)");
      return;
    }
    setLoading(true);
    try {
      const data = await buscarEnderecoPorCEP(cep);
      setEndereco(data);
    } catch {
      alert("Erro ao buscar CEP");
    } finally {
      setLoading(false);
    }
  }

  async function handleCalcularFrete() {
    setLoading(true);
    try {
      const data = await calcularFreteMock(cep);
      setFrete(data);
    } catch {
      alert("Erro ao calcular frete");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de CEP e Frete</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP (ex: 01001000)"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        maxLength={8}
      />

      <Button title="Buscar Endereço" onPress={handleBuscarCep} color="#007AFF" />

      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 15 }} />}

      <AddressCard endereco={endereco} />

      <Button title="Calcular Frete" onPress={handleCalcularFrete} color="#34C759" />

      {frete && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>💰 Valor: {frete.valor}</Text>
          <Text style={styles.resultText}>⏱ Prazo: {frete.prazo}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  resultBox: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    padding: 15,
  },
  resultText: {
    fontSize: 16,
    color: "#333",
  },
});
