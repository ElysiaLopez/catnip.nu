import Header from "./Header";
import MapCard from "./MapCard";
import Filter from "./Filter";
import CreateEvent from "./CreateEvent";
import "../assets/home.css";

export default function MapPage()
{
    return (
        <>
      <Header />
      <div className="body">
        <div className="sidebar">
          <CreateEvent />
          <div className="small-space"></div>
          <Filter />
        </div>
        <div className="space"></div>
        <div className="map">
          <MapCard />
        </div>
      </div>
    </>
    );
}