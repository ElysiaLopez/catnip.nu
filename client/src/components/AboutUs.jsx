import logo from '../assets/image0.png';

const AboutUs = () => {
    return (
      <div className="about-us-section">
      <h1 className="text-primary text-2xl font-bold p-4"><strong>Welcome to catnip, Your Interactive Guide to Campus Events!</strong></h1>
      <p>At <span className="text-primary font-bold">catnip.nu</span>, we're passionate about bringing Wildcats together through a vibrant, interactive map that makes discovering and participating in events and organizations around campus effortless and fun. Designed with both the Northwestern University community and Evanston residents in mind, our platform bridges the gap between student organizations, local businesses, and event-goers through a user-friendly app interface.</p>
  
      <div className="grid grid-cols-2 gap-4">
      
      <div className="py-8 px-6 rounded-lg border-2 my-4 border-tertiary">
      <h3 className="text-secondary text-xl font-bold p-2"><strong>Our Mission</strong></h3>
      <p className="text-left">Our mission is simple: to create a connected, engaged community where information about events and organizations is easily accessible. Whether you're looking for a cultural event, a religious meeting, a tech workshop with free food, or a local fundraiser, <span className="text-primary font-bold">catnip.nu</span> is your go-to source for what's happening at Northwestern.</p>
      </div>

      <div>
        <img src={logo} alt="catnip logo" className="m-auto w-64" />
      </div>

      </div>

      <h3 className="text-secondary text-xl font-bold p-2"><strong>Features at a Glance</strong></h3>
      <ul className="text-left">
          <li><strong>Interactive Map:</strong> Navigate through Northwestern with our interactive map, featuring pop-up icons that represent different events and orgs in real-time.</li>
          <li><strong>Customizable Filters:</strong> Looking for something specific? Filter events and organizations by category, location, and even the type of event (be it an open meeting, fundraiser, or something else).</li>
          <li><strong>Free Food Flags & More:</strong> Never miss out on events with free food again! Our tags help you find exactly what you're interested in, from free food to selling events, and more.</li>
          <li><strong>Engage with Your Favorite Orgs:</strong> Save your favorite student organizations, subscribe to notifications, and stay up-to-date with their latest events and news.</li>
          <li><strong>Community-Driven Content:</strong> From event descriptions to RSVP links, our platform is enriched with user-generated content, ensuring you get the most accurate and up-to-date information.</li>
          <li><strong>Beyond Campus:</strong> We include downtown Evanston's vibrant events and businesses, making it easier for you to explore the whole community.</li>
          <li><strong>Cute, Intuitive Interface:</strong> Navigate our platform with ease and a smile, thanks to our adorable and user-friendly design.</li>
      </ul>

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