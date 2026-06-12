# RepasseCheck 🔍

Sistema Inteligente de Análise de Conciliação de Recebimentos para E-commerce

## 📋 Descrição

RepasseCheck é uma plataforma web que detecta discrepâncias em seus recebimentos de e-commerce automaticamente. Integre suas lojas (Shopify, WooCommerce), marketplaces (Amazon, Mercado Livre) e gateway de pagamento (Stripe, PayPal) para análise completa.

## ✨ Características

- 🔍 **Análise Profunda** - Detecta inconsistências em transações
- 📊 **Dashboard em Tempo Real** - Visualize todas as métricas
- 🔗 **Integrações** - Shopify, WooCommerce, Stripe, PayPal, etc
- ⚡ **Processamento Rápido** - Processa milhares de transações
- 📧 **Relatórios Automáticos** - Receba análises por email
- 🔒 **Segurança** - Encriptação de dados e conformidade LGPD

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta GitHub (para versionamento)
- Conta Vercel (para deploy)

### Instalação Local

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/repassecheck.git
cd repassecheck

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Executar em desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` para ver o app em desenvolvimento.

## 📦 Estrutura do Projeto

```
repassecheck/
├── app/
│   ├── layout.jsx          # Layout principal
│   ├── page.jsx            # Página home
│   ├── globals.css         # Estilos globais
│   └── dashboard/
│       └── page.jsx        # Página dashboard
├── public/                 # Assets estáticos
├── package.json            # Dependências
├── next.config.js          # Configuração Next.js
├── vercel.json            # Configuração Vercel
└── README.md              # Este arquivo
```

## 🌐 Planos

### Starter - R$ 99/mês
- Até 100 transações/mês
- Dashboard básico
- Relatório mensal
- Suporte por email

### Professional - R$ 299/mês
- Até 1.000 transações/mês
- Dashboard completo
- Relatórios semanais
- Suporte prioritário
- Integrações

### Enterprise - Customizado
- Transações ilimitadas
- API completa
- Relatórios em tempo real
- Suporte dedicado 24/7

## 🔧 Variáveis de Ambiente

```
NEXT_PUBLIC_API_URL=https://api.repassecheck.com
DATABASE_URL=postgresql://...
STRIPE_API_KEY=sk_test_...
SHOPIFY_API_KEY=...
PAYPAL_API_KEY=...
```

## 📱 Responsividade

O site é 100% responsivo:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 🚀 Deploy no Vercel

### Opção 1: Automático (Recomendado)

1. Faça push no GitHub
2. Acesse https://vercel.com
3. Selecione o repositório `repassecheck`
4. Clique em "Deploy"

### Opção 2: CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 📊 Monitoramento

Acesse o Vercel Dashboard para:
- Ver logs de deployment
- Monitorar performance
- Configurar domínios personalizados
- Ver analytics de acesso

## 🔐 Segurança

- Dados encriptados em trânsito (HTTPS)
- Conformidade LGPD/GDPR
- Autenticação OAuth2
- Rate limiting e proteção DDoS

## 💬 Suporte

- 📧 Email: dev.demonsa@gmail.com
- 💬 WhatsApp: (94) 98777-1476
- 📝 Issues: GitHub Issues
- 💬 Chat: Site do RepasseCheck

## 📄 Licença

MIT - veja LICENSE para detalhes

## 👨‍💼 Autor

Desenvolvido com ❤️ por Vitor

---

**Desenvolvido em 2024** | RepasseCheck v1.0.0


## Status
- Deployment: Active (Vercel)
- - Last updated: 2026-06-12
