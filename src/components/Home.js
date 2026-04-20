import React, { useState } from 'react';
import Button from './Button/Button';
import Card from './Card/Card';
import HeroImage from './HeroImage/HeroImage';
import Label from './Label/Label';
import Dropdown from './Dropdown/Dropdown';

function Home() {
  const [selected, setSelected] = useState('webd3012');

  const courseOptions = [
    {
      value: 'webd3012',
      label: 'WEBD-3012 Business Systems Build and Testing',
    },
    { value: 'webd3011', label: 'WEBD-3011 Web Application Development' },
    { value: 'webd2013', label: 'WEBD-2013 Front End Development' },
  ];

  return (
    <div>
      <HeroImage
        backgroundImage="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=400&fit=crop"
        title="Baljit Kaur"
        subtitle="Full Stack Web Development Student at Red River College"
      />
      <section style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>About Me</h2>
        <Card title="My Background">
          <p style={{ lineHeight: '1.8', color: '#444' }}>
            I am a passionate Full Stack Web Development student at Red River
            College, enrolled in the Business Systems Build and Testing course
            (WEBD-3012). I enjoy building modern, responsive web applications
            using React, Node.js, and other cutting-edge technologies.
          </p>
          <p style={{ lineHeight: '1.8', color: '#444', marginTop: '12px' }}>
            Throughout this program I have gained hands-on experience with CI/CD
            pipelines, Docker, component-driven development, and agile
            workflows.
          </p>
        </Card>
        <div style={{ marginTop: '32px' }}>
          <h3 style={{ marginBottom: '12px' }}>Current Course</h3>
          <Label text="Select a course:" color="#333" />
          <div style={{ marginTop: '8px', marginBottom: '16px' }}>
            <Dropdown
              options={courseOptions}
              value={selected}
              onChange={(val) => setSelected(val)}
            />
          </div>
          <p style={{ color: '#1a56db', fontWeight: '500' }}>
            Currently enrolled in:{' '}
            {courseOptions.find((o) => o.value === selected)?.label}
          </p>
        </div>
        <div
          style={{
            background: '#f0f4ff',
            padding: '24px',
            borderRadius: '8px',
            marginTop: '32px',
          }}
        >
          <h3 style={{ marginBottom: '16px' }}>Contact</h3>
          <Label text="Email: baljitkaur132@gmail.com" color="#333" />
          <br />
          <br />
          <Label text="Location: Winnipeg, Manitoba" color="#333" />
          <br />
          <br />
          <Label text="GitHub: github.com/Baljitkaur132" color="#333" />
          <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
            <Button label="View My Work" backgroundColor="#1a56db" />
            <Button label="View GitHub" backgroundColor="#333" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
