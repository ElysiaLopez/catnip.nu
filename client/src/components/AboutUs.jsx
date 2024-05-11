import logo from '../assets/image0.png';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';

const AboutUs = () => {

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
      
      <div className="about-us-section">
        <Navbar />
        <button
            className="logout-button absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
      <h1 className="text-primary text-2xl font-bold p-4"><strong>Welcome to catnip, Your Interactive Guide to Campus Events!</strong></h1>
      <p>At <span className="text-primary font-bold">catnip.nu</span>, we're passionate about bringing Wildcats together through a vibrant, interactive map that makes discovering and participating in events and organizations around campus effortless and fun. Designed with both the Northwestern University community and Evanston residents in mind, our platform bridges the gap between student organizations, local businesses, and event-goers through a user-friendly app interface.</p>
  
      <div className="grid grid-cols-2 gap-4 my-8">
      
      <div className="py-8 px-6 rounded-lg border-2 my-4 border-tertiary">
      <h3 className="text-secondary text-xl font-bold p-2"><strong>Our Mission</strong></h3>
      <p className="text-left">Our mission is simple: to create a connected, engaged community where information about events and organizations is easily accessible. Whether you're looking for a cultural event, a religious meeting, a tech workshop with free food, or a local fundraiser, <span className="text-primary font-bold">catnip.nu</span> is your go-to source for what's happening at Northwestern.</p>
      </div>

      <div>
        <img src={logo} alt="catnip logo" className="m-auto w-64" />
      </div>

      </div>

      <h3 className="text-secondary text-xl font-bold p-2"><strong>Features at a Glance</strong></h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="card p-4 rounded-lg shadow-sm bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 m-auto my-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
</svg>
          <h3 className="font-bold">Interactive Map</h3>
          <p className="p-2 pb-0">Navigate through Northwestern with our interactive map, featuring pop-up icons that represent different events and orgs in real-time.</p>
        </div>

        <div className="card p-4 rounded-lg shadow-sm bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 m-auto my-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

          <h3 className="font-bold">Customizable Filters</h3>
          <p className="p-2 pb-0">Looking for something specific? Filter events and organizations by category, location, and even the type of event (be it an open meeting, fundraiser, or something else).</p>
        </div>

        <div className="card p-4 rounded-lg shadow-sm bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 m-auto my-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

          <h3 className="font-bold">Free Food Flags & More</h3>
          <p className="p-2 pb-0">Never miss out on events with free food again! Our tags help you find exactly what you're interested in, from free food to selling events, and more.</p>
        </div>

        <div className="card p-4 rounded-lg shadow-sm bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 m-auto my-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

          <h3 className="font-bold">Community-Driven Content</h3>
          <p className="p-2 pb-0">From event descriptions to RSVP links, our platform is enriched with user-generated content, ensuring you get the most accurate and up-to-date information.</p>
        </div>
      </div>

      <br />
  
      
      <h3 className="text-secondary text-xl font-bold p-2"><strong>Bringing Wildcats Together with Catnip.nu</strong></h3>
  <p className="w-256 m-auto">Catnip.nu isn't just a platform; it's a rallying point for Wildcats from all walks of life. We're here to strengthen the bonds within the Northwestern University community, providing a central hub where Wildcats can discover events, join student organizations, and celebrate our diverse interests and backgrounds. Our goal is to create a vibrant, interconnected campus environment where every Wildcat feels at home, engaged, and part of something bigger. Let's make every moment on campus count, together.</p>
      
      <br />

      <div className="w-128 m-auto py-8 px-6 rounded-lg border-2 mt-4 border-tertiary">
      <h3 className="text-secondary text-xl font-bold p-2 pt-0"><strong>Join Us</strong></h3>
      <p className="m-auto">Dive into Catnip.nu and start exploring the best of student orgs and Evanston events today. Be part of a community that celebrates diversity, connection, and the joy of discovering something new.</p>
      </div>
      
  </div>
  
  
    );
  };
  
  
  export default AboutUs;