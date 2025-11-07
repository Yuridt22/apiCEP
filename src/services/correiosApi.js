import axios from "axios";

export async function buscarEnderecoPorCEP(cep) {
  const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return res.data;
}

// Simulação de cálculo de frete (substituir depois por API real)
export async function calcularFreteMock(cepDestino) {
  // normalmente você passaria peso, dimensões, CEP origem, serviço (PAC/SEDEX)
  return {
    valor: "R$ 27,90",
    prazo: "3 dias úteis",
    destino: cepDestino,
  };
}
