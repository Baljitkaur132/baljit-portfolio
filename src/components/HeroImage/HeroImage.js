import React from 'react';

const HeroImage = ({ backgroundImage, title, subtitle, disabled }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: disabled
            ? 'rgba(128,128,128,0.6)'
            : 'rgba(0,0,0,0.4)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>{title}</h1>
        {subtitle && <p style={{ margin: '8px 0 0' }}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default HeroImage;
