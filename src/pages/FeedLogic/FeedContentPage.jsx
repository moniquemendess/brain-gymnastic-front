import "./FeedContentPage.css";
import { useState, useEffect } from "react";
import { FeedContentt } from "../../components";
import { getAllFeedLogic } from "../../services/feedLogic.service";
import { useAuth } from "../../context/auth.context";

import { getByIdComment } from "../../services/Comment.service.js";
import { useParams } from "react-router-dom";
import { CreateComment } from "../../components/Comment/CreateComment.jsx";

export const FeedContent = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [commentsByFeed, setCommentsByFeed] = useState({});
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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getByIdComment(id);
        console.log("Dados dos comentários obtidos com sucesso:", data);
        setCommentsByFeed((prev) => ({ ...prev, [id]: data }));
      } catch (error) {
        console.error("Erro ao buscar comentários:", error);
      }
    };
    fetchComments();
  }, [id]);

  const handleAddComment = (feedId, comment) => {
    setCommentsByFeed((prev) => ({
      ...prev,
      [feedId]: [...(prev[feedId] || []), comment],
    }));
  };

  return (
    <div className="content-feed">
      <h1>Hola Amigos</h1>
      {feedData &&
        feedData.data.map((feed, index) => (
          <div key={feed._id || index}>
            <FeedContentt feedData={feed} />
            <CreateComment
              id={feed._id}
              user={user}
              onAddComment={handleAddComment}
            />
            {commentsByFeed[feed._id] &&
              commentsByFeed[feed._id].map((comment, index) => (
                <div key={index}>
                  <p>{comment.content}</p>
                  <p>Postado por: {comment.owner}</p>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};
