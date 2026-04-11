function Setup() {
  return (
    <section style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Developer Setup</h2>
      <p style={{ color: '#555', marginBottom: '32px' }}>
        My personal development environment configuration.
      </p>

      <div style={{ display: 'grid', gap: '24px' }}>
        <div
          style={{
            background: '#f8f9fa',
            padding: '24px',
            borderRadius: '10px',
            border: '1px solid #e0e0e0',
          }}
        >
          <h3 style={{ color: '#1a56db', marginBottom: '16px' }}>
            🖥️ VS Code Setup
          </h3>
          <p style={{ marginBottom: '12px', lineHeight: '1.7' }}>
            My preferred code editor is <strong>Visual Studio Code</strong>. Key
            extensions I use:
          </p>
          {[
            'ESLint — catches JavaScript errors in real time',
            'Prettier — auto-formats code on save',
            'GitLens — enhanced Git history and blame',
            'Docker — manage containers inside VS Code',
            'Bracket Pair Colorizer — easier to read nested code',
          ].map((e) => (
            <div
              key={e}
              style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}
            >
              ✓ {e}
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
            ⌨️ Terminal Setup
          </h3>
          <p style={{ lineHeight: '1.7' }}>
            I use the <strong>integrated VS Code terminal</strong> with
            PowerShell on Windows. For Git operations and Docker commands I also
            use <strong>Git Bash</strong> which provides a Unix-like experience
            on Windows.
          </p>
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
            🔤 Preferred Font
          </h3>
          <p style={{ lineHeight: '1.7' }}>
            My preferred editor font is <strong>Fira Code</strong> with font
            ligatures enabled. It makes symbols like{' '}
            <code
              style={{
                background: '#e8e8e8',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              =&gt;
            </code>
            ,{' '}
            <code
              style={{
                background: '#e8e8e8',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              !==
            </code>
            , and{' '}
            <code
              style={{
                background: '#e8e8e8',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              &lt;=
            </code>{' '}
            much easier to read at a glance.
          </p>
          <div
            style={{
              marginTop: '12px',
              background: '#2d2d2d',
              color: '#f8f8f2',
              padding: '16px',
              borderRadius: '8px',
              fontFamily: 'monospace',
            }}
          >
            "editor.fontFamily": "Fira Code",
            <br />
            "editor.fontSize": 14,
            <br />
            "editor.fontLigatures": true
          </div>
        </div>
      </div>
    </section>
  );
}

export default Setup;
