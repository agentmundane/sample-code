# AgentMundane Strategy Canvas Builder

<div align="center">
  <img src="public/agentmundanetransparent.png" alt="AgentMundane Logo" width="100" height="100">
  
  **A modern, interactive Strategy Canvas Builder for AI automation solutions**
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-blue.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)
</div>

## 🚀 Overview

AgentMundane Strategy Canvas Builder is a modern web application that helps businesses design and visualize AI automation strategies. Built with React and TypeScript, it provides an intuitive interface for mapping AI solutions to customer needs using an interactive canvas approach.

## ✨ Features

### 🎨 **Interactive Canvas Builder**
- Drag-and-drop interface for creating strategy canvases
- Real-time collaboration and auto-save functionality
- Professional export capabilities (PNG format)

### 🤖 **AI-Focused Templates**
- **Sales SOP "Second Brain" Agent** - RAG-powered knowledge base for sales teams
- **Automated Competitor Analysis Agent** - Web scraping and competitive intelligence
- **Meeting Summarizer** - AI-powered transcription and summary generation
- **Social Media Post Generator** - Automated content creation workflows
- **Email Triage Agent** - Intelligent email sorting and response automation

### 🎯 **Smart Suggestions**
- AI-powered suggestions for each canvas section
- Industry-specific recommendations for automation solutions
- Context-aware placeholder text and examples

### 📱 **Modern UI/UX**
- Fully responsive design (mobile, tablet, desktop)
- Beautiful animations with Framer Motion
- Clean, professional interface using shadcn/ui components
- Acelo Navy and Orange brand color scheme

### 💾 **Data Management**
- Local storage for canvas persistence
- Template-based quick start options
- Canvas versioning and metadata tracking

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion 12.23.3
- **Routing**: React Router DOM 6.26.2
- **Drag & Drop**: @dnd-kit/core and @dnd-kit/sortable
- **Canvas Export**: html2canvas 1.4.1
- **Icons**: Lucide React 0.462.0

## 📋 Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd canvas-curve-creator
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

### Creating a New Canvas

1. **Launch the Application**: Open the AgentMundane Strategy Canvas Builder
2. **Choose Your Approach**:
   - **From Template**: Select from pre-built AI automation templates
   - **From Scratch**: Start with a blank canvas
3. **Name Your Canvas**: Give it a descriptive name (e.g., "AI Customer Support Strategy")

### Working with the Canvas

The Strategy Canvas is divided into two main sections:

#### 🔵 **Value Map (Left Side - Blue)**
- **Products & Services**: Your AI automation solutions and offerings
- **Pain Relievers**: How your solutions alleviate customer problems  
- **Gain Creators**: How your solutions create customer benefits

#### 🟠 **Customer Profile (Right Side - Orange)**
- **Customer Jobs**: What customers are trying to achieve
- **Customer Pains**: What frustrates customers in their current process
- **Customer Gains**: What benefits customers want to achieve

### Adding Content

1. **Click "Add Item"** in any section
2. **Type your content** directly in the sticky note
3. **Press Enter** to save
4. **Drag notes** to reorder within sections

### Exporting Your Canvas

1. **Click the "Export" button** in the top toolbar
2. **Choose your format** (PNG with high resolution)
3. **Download** your professional strategy canvas

## 📁 Project Structure

```
canvas-curve-creator/
├── public/                          # Static assets
│   ├── agentmundane.png            # Brand logo
│   └── agentmundanetransparent.png # Transparent logo
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── AISuggestions.tsx       # AI-powered suggestions
│   │   ├── CanvasSection.tsx       # Canvas section component
│   │   ├── StickyNote.tsx          # Interactive sticky notes
│   │   └── TemplateSelector.tsx    # Template selection modal
│   ├── data/                       # Static data and configurations
│   │   ├── suggestions.ts          # AI suggestion data
│   │   └── templates.ts            # Canvas templates
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   └── use-toast.ts           # Toast notification hook
│   ├── lib/                        # Utility libraries
│   │   └── utils.ts               # Helper functions
│   ├── pages/                      # Application pages/routes
│   │   ├── Canvas.tsx             # Main canvas interface
│   │   ├── Dashboard.tsx          # Project dashboard
│   │   ├── Index.tsx              # Landing page
│   │   └── NotFound.tsx           # 404 error page
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
- **Primary (Acelo Navy)**: `#003565` - Used for main branding and blue sections
- **Accent (Acelo Orange)**: `#ff8b04` - Used for highlights and orange sections
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
  <p>Empowering businesses with AI automation strategies</p>
</div>
