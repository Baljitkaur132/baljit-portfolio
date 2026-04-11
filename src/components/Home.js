function Home() {
  return (
    <section style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Baljit Kaur</h1>
      <h2 style={{ color: '#555', fontWeight: 'normal', marginBottom: '20px' }}>
        Full Stack Web Development Student
      </h2>
      <p
        style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '16px' }}
      >
        I am a passionate Full Stack Web Development student at Red River
        College, enrolled in the Business Systems Build and Testing course
        (WEBD-3012). I enjoy building modern, responsive web applications using
        React, Node.js, and other cutting-edge technologies.
      </p>
      <p
        style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '16px' }}
      >
        Throughout this program I have gained hands-on experience with CI/CD
        pipelines, Docker, component-driven development, and agile workflows.
      </p>
      <div
        style={{
          background: '#f0f4ff',
          padding: '20px',
          borderRadius: '8px',
          marginTop: '24px',
        }}
      >
        <h3>Contact</h3>
        <p>📧 baljit@example.com</p>
        <p>📍 Winnipeg, Manitoba</p>
        <p>
          🐙{' '}
          <a href="https://github.com/jasbi" target="_blank" rel="noreferrer">
            github.com/jasbi
          </a>
        </p>
      </div>
    </section>
  );
}

export default Home;
