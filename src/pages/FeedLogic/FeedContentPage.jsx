import "./FeedContentPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { getAllFeedLogic } from "../../services/feedLogic.service"; // Función para obtener los feeds
import { useAuth } from "../../context/auth.context";
import { TopBar } from "../../layout/TopBar";
import { FeedFigure } from "../../components/FeedLogic/FeedFigure"; //Componente que muestra un feed individual

export const FeedContentPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Obtiene el usuario actual y la función de logout del contexto de autenticación

  const [feedList, setFeedList] = useState(); // Estado para almacenar la lista de feeds

  // Función obtener los feeds desde el servicio externo
  const fetchFeeds = async () => {
    const feeds = await getAllFeedLogic();
    setFeedList(feeds); // Actualiza el estado con los feeds obtenidos
  };

  // Ejecuta una vez al montar el componente para obtener los feeds
  useEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <>
      <TopBar pageTitle="Welcome to Brain Gymnastic "></TopBar>
      <div className="feedContainer">
        <div className="feedIntro">
          <h2>
            Enter the mind game: post, solve, challenge. Your next great
            discovery starts here
          </h2>
          <div className="Start-a-post">
            <img className="icon" src={user.image} alt={user.user} />
            <input
              placeholder="New post"
              onClick={() => navigate("/createfeed")}
            />
          </div>
        </div>

        <section className="Feed-Page-grid">
          {feedList &&
            feedList.data &&
            feedList.data.map((feed, index) => (
              <div key={index}>
                <FeedFigure feed={feed} />
              </div>
            ))}
        </section>
      </div>
    </>
  );
};
