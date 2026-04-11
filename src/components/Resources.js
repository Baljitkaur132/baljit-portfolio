const resources = [
  {
    title: 'React Documentation',
    icon: '⚛️',
    summary:
      'The official React docs — my go-to reference for hooks, components, and React best practices.',
    link: 'https://react.dev',
  },
  {
    title: 'Docker Docs',
    icon: '🐳',
    summary:
      'Official Docker documentation covering Dockerfiles, containers, volumes, and networking.',
    link: 'https://docs.docker.com',
  },
  {
    title: 'MDN Web Docs',
    icon: '📘',
    summary:
      'Comprehensive reference for HTML, CSS, and JavaScript. Essential for any web developer.',
    link: 'https://developer.mozilla.org',
  },
  {
    title: 'GitHub Actions Docs',
    icon: '⚙️',
    summary:
      'Learn how to build CI/CD pipelines with GitHub Actions for automated testing and deployment.',
    link: 'https://docs.github.com/en/actions',
  },
  {
    title: 'Storybook',
    icon: '📖',
    summary:
      'Tool for building and testing UI components in isolation. Used throughout this course.',
    link: 'https://storybook.js.org',
  },
];

function Resources() {
  return (
    <section style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Resources</h2>
      <p style={{ color: '#555', marginBottom: '32px' }}>
        Helpful references and tools I use regularly as a developer.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        {resources.map((r, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '24px',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>
              {r.icon}
            </div>
            <h3 style={{ marginBottom: '8px' }}>{r.title}</h3>
            <p
              style={{
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '16px',
                fontSize: '14px',
              }}
            >
              {r.summary}
            </p>
            <a
              href={r.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#1a56db', fontWeight: 'bold', fontSize: '14px' }}
            >
              Visit →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resources;
