import { useState, useEffect } from "react";
import { FeedContentt } from "../../components";
import { getAllFeedLogic } from "../../services/feedLogic.service";

export const FeedContent = () => {
  const [feedData, setFeedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllFeedLogic();
        console.log("Dados do feed lógico obtidos com sucesso:", data);
        setFeedData(data);
      } catch (error) {
        console.error("Erro ao obter dados do feed lógico:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {feedData ? <FeedContentt feedData={feedData} /> : <p>Carregando...</p>}
    </>
  );
};
