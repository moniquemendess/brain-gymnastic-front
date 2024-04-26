import "./CreateComment.css";
import { useState } from "react";
import { createComments } from "../../services/Comment.service.js"; // Certifique-se de que o caminho de importação esteja correto
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const CreateComment = ({ id, user }) => {
  const [commentValue, setCommentValue] = useState("");

  const handleSubmit = async () => {
    const formData = {
      owner: user,
      content: commentValue,
    };

    try {
      const response = await createComments(id, formData);
      console.log("Comentário adicionado com sucesso:", response);

      setCommentValue("");
      // Aqui você pode adicionar lógica para atualizar a lista de comentários no componente pai
    } catch (error) {
      console.error("Erro ao adicionar comentário:", error);
      // Trate o erro conforme necessário, por exemplo, mostrando uma mensagem de erro ao usuário
    }
  };

  return (
    <div className="content-comm">
      <input
        className="button-comentario"
        type="text"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder="Comment"
      />

      <button className="button-2" onClick={handleSubmit}>
        Adicionar Comentário
      </button>
    </div>
  );
};
