# 🤝 Contributing to Next.js AI Chatbot

Thank you for your interest in contributing! This guide will help you get started with contributing to this AI chatbot project.

## 🌟 Ways to Contribute

- 🐛 **Bug Reports**: Help identify and fix issues
- 💡 **Feature Requests**: Suggest new AI capabilities or UI improvements
- 📝 **Documentation**: Improve setup guides and API documentation
- 🔧 **Code Contributions**: Submit bug fixes or new features
- 🧪 **Testing**: Add or improve test coverage
- 🎨 **UI/UX**: Enhance the chat interface and user experience

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- pnpm (recommended) or npm
- OpenAI API key or alternative AI provider

### Setup
```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/nextjs-ai-chatbot.git
cd nextjs-ai-chatbot

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Add your API keys to .env.local
# Start development server
pnpm dev
```

## 📋 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow the existing ESLint and Prettier configurations
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Commit Messages
Use [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add voice input support
fix: resolve chat history loading issue
docs: update API documentation
test: add unit tests for message handling
```

### Pull Request Process
1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes and add tests
3. Ensure all tests pass: `pnpm test`
4. Update documentation if needed
5. Submit a pull request with a clear description

## 🧪 Testing
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run type checking
pnpm type-check
```

## 📞 Getting Help
- Open an issue for bugs or feature requests
- Join discussions for general questions
- Email: [contact@kabilan.io](mailto:contact@kabilan.io)

---

**Built with ❤️ by [Kabi](https://github.com/Kabi10)**
