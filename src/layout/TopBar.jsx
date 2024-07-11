import "./TopBar.css";

export const TopBar = ({ pageTitle }) => {
  return (
    <div className="topBar">
      <div className="parallax-content"></div>
      <h1>{pageTitle}</h1>
    </div>
  );
};
