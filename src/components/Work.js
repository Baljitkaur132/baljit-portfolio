const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A multi-page React portfolio site built with Create React App, dockerized and served via Nginx on port 5575. Includes CI/CD pipeline with GitHub Actions, ESLint, Prettier, and Husky.',
    image:
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop',
    link: 'https://github.com/jasbi/baljit-portfolio',
    tech: ['React', 'Docker', 'Nginx', 'GitHub Actions'],
  },
  {
    title: 'Component Library',
    description:
      'A reusable React component library built with Storybook. Includes buttons, forms, cards, and navigation components following atomic design principles.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    link: 'https://github.com/jasbi',
    tech: ['React', 'Storybook', 'CSS'],
  },
  {
    title: 'Business Systems App',
    description:
      'A full-stack business management application built as part of WEBD-3012. Features user authentication, data management, and responsive design.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
    link: 'https://github.com/jasbi',
    tech: ['React', 'Node.js', 'REST API'],
  },
];

function Work() {
  return (
    <section style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>My Work</h2>
      <p style={{ color: '#555', marginBottom: '32px' }}>
        Projects completed throughout my program at Red River College.
      </p>
      <div style={{ display: 'grid', gap: '28px' }}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                display: 'block',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div style={{ padding: '24px' }}>
              <h3 style={{ marginBottom: '10px', fontSize: '1.3rem' }}>
                {p.title}
              </h3>
              <p
                style={{
                  color: '#444',
                  lineHeight: '1.7',
                  marginBottom: '16px',
                }}
              >
                {p.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '20px',
                }}
              >
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    style={{
                      background: '#e8f0fe',
                      color: '#1a56db',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '500',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
