function Skills() {
  return (
    <section style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Skills</h2>
      <p style={{ color: '#555', marginBottom: '32px' }}>
        Technologies and tools I have learned throughout the program.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
        }}
      >
        <div
          style={{
            background: '#f8f9fa',
            padding: '24px',
            borderRadius: '10px',
            border: '1px solid #e0e0e0',
          }}
        >
          <h3 style={{ color: '#1a56db', marginBottom: '16px' }}>
            💻 Languages
          </h3>
          {['JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL', 'Bash'].map((s) => (
            <div
              key={s}
              style={{
                padding: '8px 0',
                borderBottom: '1px solid #eee',
                fontSize: '15px',
              }}
            >
              ✓ {s}
            </div>
          ))}
        </div>

        <div
          style={{
            background: '#f8f9fa',
            padding: '24px',
            borderRadius: '10px',
            border: '1px solid #e0e0e0',
          }}
        >
          <h3 style={{ color: '#1a56db', marginBottom: '16px' }}>
            ⚛️ Frameworks & Libraries
          </h3>
          {['React.js', 'Node.js', 'Express.js', 'Storybook', 'Jest'].map(
            (s) => (
              <div
                key={s}
                style={{
                  padding: '8px 0',
                  borderBottom: '1px solid #eee',
                  fontSize: '15px',
                }}
              >
                ✓ {s}
              </div>
            )
          )}
        </div>

        <div
          style={{
            background: '#f8f9fa',
            padding: '24px',
            borderRadius: '10px',
            border: '1px solid #e0e0e0',
          }}
        >
          <h3 style={{ color: '#1a56db', marginBottom: '16px' }}>🛠️ Tools</h3>
          {[
            'Docker',
            'Git & GitHub',
            'VS Code',
            'ESLint',
            'Prettier',
            'Husky',
            'GitHub Actions',
          ].map((s) => (
            <div
              key={s}
              style={{
                padding: '8px 0',
                borderBottom: '1px solid #eee',
                fontSize: '15px',
              }}
            >
              ✓ {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
