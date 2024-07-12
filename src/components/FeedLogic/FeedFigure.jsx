import "./FeedFigure.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

/**
 *  FeedFigure: información detallada sobre un feed,
 *  incluyendo imagen, título, fecha, contenido e información del propietario.
 */

export const FeedFigure = ({ feed }) => {
  const navigate = useNavigate();

  // Formación de la data criación del feed
  const creationDate = new Date(feed?.createdAt);
  const formattedDate = creationDate.toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
  });

  return (
    <div className="containerFeed">
      <div
        className="section-consumer__image"
        style={{ backgroundImage: `url(${feed?.image})` }}
      ></div>
      <div className="section-feed__text">
        <h2 className="feedTitle">{feed?.title}</h2>
        <p className="feedCreation">{formattedDate}</p>
        <p className="feedContent">{feed?.content}</p>

        <button
          className="button--blue"
          onClick={() => {
            navigate(`/feedDetail/${feed?._id}`);
          }}
        >
          Enter Feed
        </button>

        <div className="containerFeedOwner">
          <Link to={`/profileDetail/${feed?.owner?._id}`}>
            <img
              className="imgOwnerFeed"
              src={feed?.owner?.image}
              alt={feed?.owner?.userName}
            />
            <h5 className="nameOwnerFedd">
              {feed?.owner?.userName} {}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};
