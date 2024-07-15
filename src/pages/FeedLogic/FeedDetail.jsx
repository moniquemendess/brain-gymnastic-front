import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdFeedLogic } from "../../services/feedLogic.service";
import { FeedFigureDetail } from "../../components/FeedLogic/FeedFigureDetail";
import { useAuth } from "../../context/auth.context";

export const FeedDetail = () => {
  const { id } = useParams();
  console.log("hola", id);
  const { user, setUser } = useAuth();
  console.log("sou", user);
  const [fullFeed, setFullFeed] = useState();
  const [send, setSend] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  useEffect(() => {
    const fetchFullFeed = async () => {
      try {
        const result = await getByIdFeedLogic(id); // Supondo que getByIdFeedLogic faça a busca dos dados
        setFullFeed(result.data); // Supondo que result contenha o campo 'data'
      } catch (error) {
        console.error("Erro ao buscar o feed:", error);
        console.log("Error status:", error.response.status);
        // Tratar estado de erro se necessário
      }
    };

    fetchFullFeed(); // Chamada da função dentro do useEffect
  }, [id]); //
  return (
    <div className="FeedDetail-container">
      <div>
        {fullFeed?.data && <FeedFigureDetail feedData={fullFeed.feedData} />}
      </div>
    </div>
  );
};
