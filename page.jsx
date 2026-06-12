'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setData({
        totalTransactions: 1245,
        discrepancies: 47,
        revenue: 125400.50,
        conversionRate: 3.8,
        averageValue: 100.75,
        successRate: 96.2,
        recentTransactions: [
          { id: 1, store: 'Shopify Store 1', amount: 299.99, status: 'success', date: '2024-01-15' },
          { id: 2, store: 'WooCommerce Site', amount: 149.99, status: 'pending', date: '2024-01-14' },
          { id: 3, store: 'Shopify Store 2', amount: 599.99, status: 'discrepancy', date: '2024-01-13' },
          { id: 4, store: 'Stripe Account', amount: 1200.00, status: 'success', date: '2024-01-12' },
          { id: 5, store: 'PayPal Business', amount: 450.00, status: 'success', date: '2024-01-11' },
        ],
      })
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <h2>Carregando Dashboard...</h2>
        <div style={{ marginTop: '2rem', fontSize: '3rem' }}>⏳</div>
      </div>
    )
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Dashboard</h1>
        <p style={{ color: '#666' }}>Bem-vindo ao seu painel de controle de conciliação</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total de Transações</h3>
          <div className="value">{data.totalTransactions}</div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Este mês</p>
        </div>

        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
          <h3>Discrepâncias Detectadas</h3>
          <div className="value">{data.discrepancies}</div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Que precisam revisão</p>
        </div>

        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
          <h3>Receita Total</h3>
          <div className="value">R$ {data.revenue.toLocaleString('pt-BR')}</div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Processado</p>
        </div>

        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
          <h3>Taxa de Sucesso</h3>
          <div className="value">{data.successRate}%</div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>Transações OK</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {/* Recent Transactions */}
        <div className="dashboard" style={{ gridColumn: 'span 2' }}>
          <h2>Transações Recentes</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Loja</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {data.recentTransactions.map((tx) => (
                  <tr key={tx.id}>
                    <td>{tx.store}</td>
                    <td>R$ {tx.amount.toLocaleString('pt-BR')}</td>
                    <td>
                      <span
                        style={{
                          padding: '0.4rem 0.8rem',
                          borderRadius: '4px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          background:
                            tx.status === 'success' ? '#d4edda' :
                            tx.status === 'pending' ? '#fff3cd' :
                            '#f8d7da',
                          color:
                            tx.status === 'success' ? '#155724' :
                            tx.status === 'pending' ? '#856404' :
                            '#721c24',
                        }}
                      >
                        {tx.status === 'success' ? '✓ Sucesso' :
                         tx.status === 'pending' ? '⏳ Pendente' :
                         '⚠ Discrepância'}
                      </span>
                    </td>
                    <td>{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard">
          <h2>Ações Rápidas</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn" style={{ width: '100%', textAlign: 'center' }}>
              📊 Gerar Relatório
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
              🔗 Conectar Loja
            </button>
            <button className="btn" style={{ width: '100%', textAlign: 'center', background: '#6366f1' }}>
              ⚙️ Configurações
            </button>
            <button className="btn" style={{ width: '100%', textAlign: 'center', background: '#10b981' }}>
              📧 Enviar Email
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="dashboard" style={{ marginTop: '2rem' }}>
        <h2>Análises</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#6366f1' }}>{data.conversionRate}%</div>
            <p style={{ color: '#666', marginTop: '0.5rem' }}>Taxa de Conversão</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#764ba2' }}>R$ {data.averageValue.toFixed(2)}</div>
            <p style={{ color: '#666', marginTop: '0.5rem' }}>Ticket Médio</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f5576c' }}>
              {((data.discrepancies / data.totalTransactions) * 100).toFixed(1)}%
            </div>
            <p style={{ color: '#666', marginTop: '0.5rem' }}>Taxa de Erro</p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <p style={{ color: '#666', marginBottom: '1rem' }}>Precisa de ajuda?</p>
        <Link href="/" className="btn" style={{ marginRight: '1rem' }}>
          ← Voltar Home
        </Link>
        <button className="btn btn-secondary">
          📞 Suporte
        </button>
      </div>
    </div>
  )
}
