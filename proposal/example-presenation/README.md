# AgentMundane Presentation

<div align="center">
  <img src="public/agentmundanetransparent.png" alt="AgentMundane Logo" width="100" height="100">
  
  **A professional, interactive presentation showcasing AgentMundane's AI automation solutions and services**
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-blue.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)
</div>

## 🚀 Overview

AgentMundane Presentation is a professional, interactive presentation showcasing AgentMundane's AI automation solutions and services. Built with React and TypeScript, it provides a comprehensive 21-slide presentation covering all aspects of AI automation consulting and implementation.

## ✨ Features

- 📊 **21 Professional Slides** - Complete presentation covering all aspects of AI automation
- 🤖 **AI-Focused Content** - Tailored content about n8n workflows, OpenAI integration, and intelligent agents
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Interactive Navigation** - Smooth navigation with sidebar, previous/next controls, and slide previews
- ⚡ **Fast Performance** - Optimized React application with minimal bundle size
- 🎨 **AgentMundane Branding** - Custom colors, fonts, and styling aligned with brand guidelines

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React 0.462.0
- **Routing**: React Router DOM 6.26.2

## 📋 Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd example-presenation
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

### Navigating the Presentation

1. **Launch the Application**: Open the AgentMundane Presentation
2. **Navigation Options**:
   - Use the sidebar for quick slide access
   - Previous/Next buttons for sequential navigation
   - Slide previews for visual navigation
3. **Presentation Mode**: Full-screen presentation for client meetings
4. **Interactive Elements**: Click through case studies, pricing tables, and demos

### Customization

- **Content Updates**: Modify slide components to reflect current offerings
- **Branding**: Update colors and logos in the design system
- **Client-Specific**: Customize case studies and pricing for specific prospects

## 📋 Slide Overview

1. **Title Slide** - AI Automation Strategy Proposal
2. **Agenda** - Presentation roadmap
3. **About AgentMundane** - Company overview and expertise
4. **Problem Statement** - Common automation challenges
5. **Market Analysis** - Industry insights
6. **Our Solution** - AI agent and workflow solutions
7. **Product Demo** - Solution walkthrough
8. **Case Studies** - Real client success stories
9. **ROI Analysis** - Return on investment data
10. **Implementation Timeline** - Project phases
11. **Pricing Overview** - Service packages and pricing
12. **Risk Assessment** - Implementation considerations
13. **Team Introduction** - Meet the AI automation experts
14. **Technology Stack** - n8n, OpenAI, and integration tools
15. **Competitive Analysis** - Market positioning
16. **Next Steps** - Getting started process
17. **FAQ** - Common questions and answers
18. **Contact Information** - Get in touch details
19. **Appendix** - Additional resources
20. **Thank You** - Follow-up and next steps

## 🔥 Service Packages

### Workflow Starter Pack - $2,500
- 3 automated workflows
- Basic AI agent setup
- n8n workflow design
- Email & chat integration
- 30-day support included

### Custom Agent Build - $8,500 (Most Popular)
- Full Second Brain agent
- RAG knowledge system
- Voice AI integration
- Advanced workflow automation
- 90-day support & training
- Ongoing optimization

### Enterprise Strategy - Custom Pricing
- Unlimited AI agents
- Enterprise integrations
- Custom development
- Dedicated project manager
- 24/7 priority support
- Quarterly strategy reviews

## 📁 Project Structure

```
example-presenation/
├── public/                          # Static assets
│   ├── agentmundane.png            # Brand logo
│   └── agentmundanetransparent.png # Transparent logo
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── slides/                 # Individual slide components
│   │   ├── PresentationApp.tsx     # Main presentation controller
│   │   └── PresentationLayout.tsx  # Navigation and layout
│   ├── lib/                        # Utility libraries
│   │   └── utils.ts               # Helper functions
│   ├── pages/                      # Application pages/routes
│   │   ├── Index.tsx              # Main presentation interface
│   │   └── NotFound.tsx           # 404 error page
│   ├── types/                      # TypeScript type definitions
│   │   └── presentation.ts        # Presentation-related types
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

## 📄 License

This project is proprietary software owned by AgentMundane. All rights reserved.

## 🆘 Support

For support, feature requests, or bug reports:

- **Email**: [support@agentmundane.com](mailto:john@agentmundane.com)

## 🚀 What's Next?

- [ ] Interactive slide animations
- [ ] Client-specific presentation templates
- [ ] Real-time presentation sharing
- [ ] Analytics and engagement tracking
- [ ] Integration with presentation platforms
- [ ] Custom slide builder interface

---

<div align="center">
  <p>Built with ❤️ by the AgentMundane Team</p>
  <p>Empowering businesses with professional AI automation presentations</p>
</div>