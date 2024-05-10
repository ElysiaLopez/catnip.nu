import Map from "./Map";
import Filter from "./Filter";
import CreateEvent from "./CreateEvent";
import "../assets/home.css";

export default function MapPage()
{
    return (
        <>
      <div className="body">
        <div className="sidebar">
          <CreateEvent />
          <div className="small-space"></div>
          <Filter />
        </div>
        <div className="space"></div>
        <div className="map bg-white h-screen w-screen overflow-hidden rounded border-white border-4 shadow-lg">
          <Map />
        </div>
      </div>
    </>
    );
}