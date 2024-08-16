import { doc, getDoc } from "firebase/firestore";
import { Votes } from "../components/research/research-types";
import { db } from "../firebase/config";

export const getVotes = async (id: string): Promise<Votes | undefined> => {
  try {
    const pesquisaRef = doc(db, "pesquisas", id);
    const docPesquisa = await getDoc(pesquisaRef);

    if (docPesquisa.exists()) {
      const votosData = docPesquisa.data().votos;
      console.log("Votos:", votosData);
      return votosData as Votes;
    } else {
      console.log("Documento não encontrado!");
    }
  } catch (error) {
    console.log("Erro ao obter os votos:", error);
  }
};
