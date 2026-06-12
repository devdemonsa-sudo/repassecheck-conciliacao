import './globals.css'

export const metadata = {
  title: 'RepasseCheck - Análise de Conciliação',
  description: 'Sistema inteligente de análise de conciliação de recebimentos para e-commerce',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>✓</text></svg>" />
      </head>
      <body>
        <nav className="navbar">
          <div className="container">
            <div className="logo">✓ RepasseCheck</div>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/dashboard">Dashboard</a>
              <a href="#features">Features</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 RepasseCheck. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
