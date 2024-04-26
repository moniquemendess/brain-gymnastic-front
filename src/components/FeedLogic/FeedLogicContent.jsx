import "./FeedLogicContent.css";

export const FeedContentt = ({ feedData }) => {
  if (!feedData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="FeedContent-Container">
        {/* <img src={feedData.image} alt="Imagen de la figura" /> */}
        <p dangerouslySetInnerHTML={{ __html: feedData.content }} />
      </div>
    </>
  );
};
