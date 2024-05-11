import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';
import Map from './Map';
import Filter from './Filter';
import CreateEvent from './CreateEvent';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import '../assets/home.css';

export default function MapPage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to the landing page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="sidebar">
          <CreateEvent />
          <div className="small-space"></div>
          <Filter />
        </div>
        <div className="space"></div>
        <div className="map bg-white h-screen w-screen overflow-hidden rounded-lg p-4 border-gray-200 border-4">
          <Map />
          <button
            className="logout-button absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}