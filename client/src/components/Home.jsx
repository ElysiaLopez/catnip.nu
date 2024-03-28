import Header from "./components/Header";
import MapCard from "./components/MapCard";
import Filter from "./components/Filter";
import CreateEvent from "./components/CreateEvent";
import "./assets/home.css";

export default function Home()
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