# Sales Sequence Generator

<div align="center">
  <img src="public/agentmundanenotexttransparent.png" alt="AgentMundane Logo" width="100" height="100">
  
  **A professional sales tool for generating tailored outreach sequences based on customer tier value**
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-blue.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)
</div>

## 🚀 Overview

Sales Sequence Generator is a professional sales tool for generating tailored outreach sequences based on customer tier value. Built with React and TypeScript, it helps sales professionals create strategic, tiered outreach approaches that maximize engagement and conversion rates.

## ✨ Features

- **Tier-Based Sequences**: Three distinct outreach strategies based on prospect value
- **Multi-Channel Approach**: Email, LinkedIn, phone calls, and social interactions
- **Professional Design**: Clean, modern interface with AgentMundane branding
- **CRM-Ready**: Sequences designed for easy implementation in any CRM system
- **Strategic Framework**: Helps sales teams think systematically about prospect segmentation

## Customer Tiers

### 🥇 Gold Customer (High-Value Target)
- **Duration**: 14 days
- **Focus**: Building relationships, deep personalization
- **Channels**: Email, LinkedIn, Phone, Social Interaction
- **Approach**: High-touch, highly personalized outreach

### 🥈 Silver Customer (Medium-Value Target)
- **Duration**: 10 days  
- **Focus**: Value proposition, efficiency
- **Channels**: Email, LinkedIn
- **Approach**: Semi-personalized with clear value focus

### 🥉 Bronze Customer (Volume Target)
- **Duration**: 7 days
- **Focus**: Volume and broad reach
- **Channels**: Primarily email
- **Approach**: Template-based automation with basic personalization

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React 0.462.0

## 📋 Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sequence-craft-champion
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

### Creating Sales Sequences

1. **Launch the Application**: Open the Sales Sequence Generator
2. **Select Customer Tier**: Choose Gold, Silver, or Bronze based on your prospect's value:
   - **Gold**: High-value targets with personalized, multi-channel approach
   - **Silver**: Medium-value prospects with semi-personalized outreach
   - **Bronze**: Volume-based targets with template-driven automation
3. **Review Sequence**: Examine the generated sequence with specific days, channels, and actions
4. **Implement in CRM**: Copy the sequence steps into your preferred CRM system
5. **Customize**: Adapt the messaging to match your brand voice and offerings

### Sequence Optimization

- **Track Performance**: Monitor response rates by tier and channel
- **A/B Testing**: Test different messaging approaches within each tier
- **Continuous Improvement**: Refine sequences based on conversion data

## 📁 Project Structure

```
sequence-craft-champion/
├── public/                          # Static assets
│   ├── agentmundanenotext1.png     # Brand logo
│   ├── agentmundanenotexttransparent.png # Transparent logo
│   └── favicon.svg               # Favicon
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── Header.tsx              # Application header
│   │   ├── SequenceDisplay.tsx     # Sequence visualization
│   │   └── TierSelector.tsx        # Customer tier selection
│   ├── data/                       # Static data and configurations
│   │   └── sequences.ts            # Sales sequence data
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   └── use-toast.ts           # Toast notification hook
│   ├── lib/                        # Utility libraries
│   │   └── utils.ts               # Helper functions
│   ├── pages/                      # Application pages/routes
│   │   ├── Index.tsx              # Main sequence interface
│   │   └── NotFound.tsx           # 404 error page
│   ├── App.tsx                     # Main application component
│   ├── index.css                   # Global styles and design system
│   └── main.tsx                    # Application entry point
├── spec.md                         # Project specification
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

- [ ] Advanced sequence personalization
- [ ] CRM integration capabilities
- [ ] A/B testing framework
- [ ] Performance analytics dashboard
- [ ] Custom sequence builder
- [ ] Team collaboration features

---

<div align="center">
  <p>Built with ❤️ by the AgentMundane Team</p>
  <p>Empowering businesses with strategic sales automation</p>
</div>
