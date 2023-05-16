import ChairCover from "./components/chairCover/ChairCover";
import AboutThisPlace from "./components/aboutThisPlace/AboutThisPlace";
import Amenities from "./components/amenities/amenities";
import ThingsToKnow from "./components/thingsToKnow/ThingsToKnow";

function Body() {
  return (
    <>
      <div className="titlebar">Property Title</div>
      <div className="gallery">Gallery Component</div>
      <div className="columnsContainer">
        <div className="leftColumn">
          <div className="overview">Property Overview Component</div>
          <ChairCover />
          <div className="host">Host Component</div>
          <AboutThisPlace />
          <Amenities />
          <div className="calendar">Calendar Component</div>
        </div>
        <div className="rightColumn">
          <div className="reservation">Reservation Component</div>
        </div>
      </div>
      <div className="reviews">Reviews Component</div>
      <div className="map">Map Component</div>
      <ThingsToKnow className="things" />
    </>
  );
}

export default Body;
