import React from 'react';

const ProjectCard = ({ title, description, tech, link }) => (
  <div
    style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '24px',
      maxWidth: '400px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    }}
  >
    <h3 style={{ marginBottom: '10px' }}>{title}</h3>
    <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '16px' }}>
      {description}
    </p>
    <div
      style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '16px',
      }}
    >
      {tech.map((t, i) => (
        <span
          key={i}
          style={{
            background: '#e8f0fe',
            color: '#1a56db',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '13px',
          }}
        >
          {t}
        </span>
      ))}
    </div>
    <a
      href={link}
      style={{
        color: '#fff',
        background: '#1a56db',
        padding: '8px 18px',
        borderRadius: '6px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '14px',
      }}
    >
      View on GitHub →
    </a>
  </div>
);

export default {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
};

export const Default = {
  args: {
    title: 'Portfolio Website',
    description:
      'A multi-page React portfolio site built with Create React App and Docker.',
    tech: ['React', 'Docker', 'Nginx'],
    link: 'https://github.com/Baljitkaur132/baljit-portfolio',
  },
};
