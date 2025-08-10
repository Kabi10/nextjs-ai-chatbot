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

## Deploy Your Own

You can deploy your own version of the Next.js AI Chatbot to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fai-chatbot&env=AUTH_SECRET,OPENAI_API_KEY&envDescription=Learn%20more%20about%20how%20to%20get%20the%20API%20Keys%20for%20the%20application&envLink=https%3A%2F%2Fgithub.com%2Fvercel%2Fai-chatbot%2Fblob%2Fmain%2F.env.example&demo-title=AI%20Chatbot&demo-description=An%20Open-Source%20AI%20Chatbot%20Template%20Built%20With%20Next.js%20and%20the%20AI%20SDK%20by%20Vercel.&demo-url=https%3A%2F%2Fchat.vercel.ai&stores=[{%22type%22:%22postgres%22},{%22type%22:%22blob%22}])

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
