import React from 'react';

const NavBar = ({ links }) => (
  <nav style={{ background: '#333', padding: '10px' }}>
    {links.map((link, i) => (
      <a
        key={i}
        href={link.href}
        style={{
          color: 'white',
          marginRight: '15px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default {
  title: 'Portfolio/NavBar',
  component: NavBar,
};

export const Default = {
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Work', href: '/work' },
      { label: 'Skills', href: '/skills' },
      { label: 'Resources', href: '/resources' },
      { label: 'Setup', href: '/setup' },
    ],
  },
};
