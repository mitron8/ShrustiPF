export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
      <span className="font-mono-label text-[10px] tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>
        Loading...
      </span>
    </div>
  )
}
