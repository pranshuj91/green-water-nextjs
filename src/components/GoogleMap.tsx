
import React from 'react';

interface GoogleMapProps {
  address: string;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, className = "" }) => {
  // Encode the address for the Google Maps embed URL
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6daTgY4Lr6GQxQ0&q=${encodedAddress}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-3xl"
        title="Google Maps"
      />
    </div>
  );
};

export default GoogleMap;
