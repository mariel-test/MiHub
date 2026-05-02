import { Link } from 'react-router-dom'

export default function Footer({ prev, next, center }) {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner} className="footer-inner">
        <div style={styles.left}>
          {prev && (
            <Link to={prev.to} style={styles.link}>
              ← {prev.label}
            </Link>
          )}
        </div>
        <div style={styles.middle}>
          {center && (
            <Link to={center.to} style={styles.centerBtn}>
              {center.label}
            </Link>
          )}
        </div>
        <div style={styles.right}>
          {next && (
            <Link to={next.to} style={styles.link}>
              {next.label} →
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid #ffffff22',
    marginTop: 64,
    padding: '20px 0',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flex: 1 },
  middle: { flex: 1, display: 'flex', justifyContent: 'center' },
  right: { flex: 1, display: 'flex', justifyContent: 'flex-end' },
  link: {
    fontSize: 16,
    fontWeight: 500,
    color: '#ffffff',
    opacity: 0.8,
    transition: 'opacity 0.2s',
  },
  centerBtn: {
    fontSize: 15,
    fontWeight: 500,
    color: '#ffffff',
    border: '1.5px solid #7c3aed',
    borderRadius: 999,
    padding: '8px 22px',
    background: 'transparent',
  },
}
