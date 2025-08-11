# 🤖 Next.js AI Chatbot

<div align="center">
  <img alt="Next.js AI Chatbot - Intelligent conversational interface" src="app/(chat)/opengraph-image.png" width="600">

  **Intelligent conversational interface built with Next.js and TypeScript. Demonstrates modern AI integration patterns and responsive chat UI design.**

  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
  [![AI SDK](https://img.shields.io/badge/AI_SDK-Vercel-blue?style=for-the-badge)](https://sdk.vercel.ai)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
</div>

<p align="center">
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-quick-start"><strong>Quick Start</strong></a> ·
  <a href="#-deployment"><strong>Deployment</strong></a>
</p>

---

## ✨ Features

### 🧠 **AI-Powered Conversations**
- **Multiple AI Providers**: OpenAI GPT-4, Anthropic Claude, Cohere, and more
- **Intelligent Responses**: Context-aware conversations with memory
- **Real-time Streaming**: Live response generation with typing indicators
- **Multi-modal Support**: Text, images, and file attachments
- **Ethical AI Enhancement**: Bias detection, content filtering, and transparency features

### 🌟 **Enhanced Content Integration**
- **Inspirational Quotes**: Context-aware motivational quotes via Quotable API
- **Educational Content**: NASA APOD integration for space science learning
- **Visual Content**: Dynamic image generation for contextual responses
- **Text Processing**: Advanced text analysis and processing demonstrations

### 🎨 **Modern User Interface**
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Themes**: Automatic theme switching with user preferences
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Component Library**: Built with shadcn/ui and Radix UI primitives

### 🔧 **Technical Excellence**
- **Next.js 14**: App Router with React Server Components
- **TypeScript**: Full type safety and enhanced developer experience
- **Real-time Updates**: Server Actions for seamless interactions
- **Performance Optimized**: Code splitting, lazy loading, and caching

### 💾 **Data & Authentication**
- **Persistent Storage**: Chat history saved with Vercel Postgres
- **File Management**: Efficient file storage with Vercel Blob
- **Secure Authentication**: NextAuth.js integration
- **User Management**: Profile and preference management

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 14, React, TypeScript, Tailwind CSS |
| **UI Components** | shadcn/ui, Radix UI, Lucide Icons |
| **AI Integration** | Vercel AI SDK, OpenAI, Anthropic, Cohere |
| **Database** | Vercel Postgres (Neon), Drizzle ORM |
| **Storage** | Vercel Blob for file management |
| **Authentication** | NextAuth.js with multiple providers |
| **Deployment** | Vercel with edge functions |
| **Development** | Biome, ESLint, Prettier, TypeScript |

## 🤖 AI Model Providers

This chatbot supports multiple AI providers through the Vercel AI SDK:

- **OpenAI**: GPT-4, GPT-4 Turbo, GPT-3.5 Turbo
- **Anthropic**: Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku
- **Cohere**: Command R+, Command R
- **Google**: Gemini Pro, Gemini Pro Vision
- **Mistral**: Mistral Large, Mistral Medium
- **Custom Models**: Easy integration with any OpenAI-compatible API

Switch between providers with just a few lines of code configuration.

## 🌐 Live Demo

Experience the enhanced AI chatbot with ethical AI features: **[Live Demo Coming Soon]**

> **Note**: Currently implementing deployment optimizations for best performance. Live demo will showcase all API integrations and ethical AI enhancements.

## 📦 Deploy Your Own

For detailed deployment instructions with environment setup, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### **Quick Deploy to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

**Important**: Configure all environment variables in Vercel Dashboard before deployment.

### **One-Click Deploy (Alternative)**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKabi10%2Fnextjs-ai-chatbot&env=AUTH_SECRET,OPENAI_API_KEY,POSTGRES_URL&envDescription=Configure%20all%20required%20environment%20variables&envLink=https%3A%2F%2Fgithub.com%2FKabi10%2Fnextjs-ai-chatbot%2Fblob%2Fmain%2F.env.example)

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).
