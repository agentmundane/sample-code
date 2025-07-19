# AgentMundane Service Quoter

<div align="center">
  <img src="public/agentmundanetransparent.png" alt="AgentMundane Logo" width="100" height="100">
  
  **A professional React TypeScript application for creating AI automation service quotes**
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-blue.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)
</div>

## 🚀 Overview

AgentMundane Service Quoter is a professional React TypeScript application for creating AI automation service quotes. This tool helps AgentMundane showcase its capabilities to potential clients through polished service quotes and proposals.

## ✨ Features

- **Professional Quote Creation**: Create detailed service quotes for AI automation projects
- **AI-Focused Services**: Pre-loaded with AgentMundane's core offerings:
  - n8n Workflow Development
  - Copilot Studio Agent Building
  - RAG System Implementation
  - AI Strategy Consulting
  - Process Automation Audits
- **Client Management**: Track customers and advanced pricing configurations
- **Document Generation**: Professional PDF-ready quote documents
- **Auto-Save**: Automatic quote persistence with local storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling with custom AgentMundane branding
- **Radix UI** for accessible component primitives
- **Lucide React** for icons
- **Shadcn/ui** for component library

## 🎨 Brand Colors

- **Primary**: Acelo Navy (`#003565`)
- **Accent**: Acelo Orange (`#ff8b04`)

## 📋 Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd concise-sales-engine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📖 Usage

### Creating a Service Quote

1. **Launch the Application**: Open the AgentMundane Service Quoter
2. **Select a Customer**: Choose from existing clients or add a new one
3. **Add Services**: Select from AI automation services like:
   - n8n Workflow Development
   - Copilot Studio Agent Building
   - RAG System Implementation
   - AI Strategy Consulting
   - Process Automation Audits
4. **Configure Pricing**: Set standard or advanced pricing for enterprise customers
5. **Generate Quote**: Create professional PDF-ready quote documents

### Quote Management

- **Auto-Save**: Quotes are automatically saved every 3 seconds
- **Status Tracking**: Monitor quote progress (Draft → Sent → Approved → Won/Lost)
- **Document Export**: Generate professional quote documents for client presentation

## 📁 Project Structure

```
concise-sales-engine/
├── public/                          # Static assets
│   ├── agentmundane.png            # Brand logo
│   └── agentmundanetransparent.png # Transparent logo
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── quote/                  # Quote-specific components
│   │   ├── DemoWalkthrough.tsx     # Application demo
│   │   ├── QuoteCalculator.tsx     # Quote calculation logic
│   │   └── StorageManager.tsx      # Data persistence
│   ├── data/                       # Static data and configurations
│   │   └── sampleData.ts           # Sample quote data
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   ├── use-toast.ts           # Toast notification hook
│   │   ├── useAutoSave.ts         # Auto-save functionality
│   │   └── useQuoteStorage.ts     # Quote storage management
│   ├── lib/                        # Utility libraries
│   │   └── utils.ts               # Helper functions
│   ├── pages/                      # Application pages/routes
│   │   ├── Index.tsx              # Main quote interface
│   │   └── NotFound.tsx           # 404 error page
│   ├── types/                      # TypeScript type definitions
│   │   └── quote.ts               # Quote-related types
│   ├── utils/                      # Additional utilities
│   │   └── storage.ts             # Storage utilities
│   ├── App.tsx                     # Main application component
│   ├── index.css                   # Global styles and design system
│   └── main.tsx                    # Application entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build configuration
```

## 🎨 Design System

### Colors
- **Primary (Acelo Navy)**: `#003565` - Used for main branding and professional elements
- **Accent (Acelo Orange)**: `#ff8b04` - Used for highlights and call-to-action elements
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Headings**: Montserrat (SemiBold 600, Bold 700)
- **Body Text**: Roboto (Regular 400, Medium 500)

### Components
All UI components follow the shadcn/ui design system with custom AgentMundane theming.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** formatting (configured in editor)
- **Functional components** with React hooks

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain responsive design principles
- Test across multiple browsers and devices
- Follow the existing code style and component patterns
- Update documentation for new features

## 🆘 Support

For support, feature requests, or bug reports:

- **Email**: [john@agentmundane.com](mailto:john@agentmundane.com)

---

<div align="center">
  <p>Built with ❤️ by the AgentMundane Team</p>
  <p>Empowering businesses with professional AI automation quotes</p>
</div>