import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import SocialMedia from './SocialMedia';

function Map() {
  const locations = [
    {
      name: "Medical Center 1",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      phone: "(406) 555-0120",
      hours: "Mon - Fri: 9:00 AM - 10:00 PM\nSat - Sun: 9:00 AM - 8:00 PM"
    },
    {
      name: "Medical Center 2",
      address: "2464 Royal Ln. Mesa,New Jersey 45463",
      phone: "(406) 544-0123",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM\nSat - Sun: 9:00 AM - 8:00 PM"
    }
  ];

  return (
    <section className='map-section container'>
      <div className='map'>
        <img src="/Images/map.svg" alt="Map" />
      </div>

      <div className='locations'>
        {locations.map((location, index) => (
          <React.Fragment key={index}>
            <div className={`location-${index + 1}`}>
              <h2>{location.name}</h2>
              <div className="location-details">
                <div className='location-details-item'>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>{location.address}</p>
                </div>
                <div className='location-details-item'>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>{location.phone}</p>
                </div>
                <div className='location-details-item'>
                  <FontAwesomeIcon icon={faClock} />
                  <p style={{ whiteSpace: 'pre-line' }}>{location.hours}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
        <SocialMedia />
      </div>
    </section>
  );
}

export default Map