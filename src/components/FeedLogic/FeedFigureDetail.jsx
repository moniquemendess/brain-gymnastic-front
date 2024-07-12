import { Link } from "react-router-dom";

export const FeedFigureDetail = ({ feedData }) => {
  // Formateo de la fecha de creación del feed
  const creationDate = new Date(feedData.createdAt);
  const formattedDate = creationDate.toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
  });

  return (
    <div className="FeedFigureDetail-Container">
      <h1>{feedData.title}</h1>
      <img src={feedData.image} alt={feedData.title} />

      <Link to={`/profileDetail/${feedData?.owner?._id}`}>
        <img
          className="imgOwnerFeed"
          src={feedData.owner.image}
          alt={feedData.owner.userName}
        />
        <h6>{feedData.owner.userName}</h6>
      </Link>

      <p>{formattedDate}</p>
      <p dangerouslySetInnerHTML={{ __html: feedData.content }} />
    </div>
  );
};
