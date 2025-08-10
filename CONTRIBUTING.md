# 🤝 Contributing to Kabi's Projects

Thank you for your interest in contributing! This guide will help you get started with contributing to any of my repositories.

## 🌟 **Ways to Contribute**

- 🐛 **Bug Reports**: Help identify and fix issues
- 💡 **Feature Requests**: Suggest new functionality
- 📝 **Documentation**: Improve or add documentation
- 🔧 **Code Contributions**: Submit bug fixes or new features
- 🧪 **Testing**: Add or improve test coverage
- 🎨 **Design**: Enhance UI/UX and visual elements

## 🚀 **Getting Started**

### **1. Fork & Clone**
```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
cd REPOSITORY_NAME
```

### **2. Set Up Development Environment**
```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### **3. Create a Branch**
```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name
```

## 📋 **Contribution Process**

### **Step 1: Issue First**
- Check existing issues before creating new ones
- For bugs: Use the bug report template
- For features: Use the feature request template
- Discuss your approach before starting work

### **Step 2: Development**
- Follow the coding standards (see below)
- Write tests for new functionality
- Update documentation as needed
- Keep commits small and focused

### **Step 3: Testing**
```bash
# Run all tests
npm run test

# Run linting
npm run lint

# Run type checking
npm run type-check

# Build the project
npm run build
```

### **Step 4: Pull Request**
- Use the pull request template
- Reference related issues
- Include screenshots for UI changes
- Ensure all checks pass

## 📏 **Coding Standards**

### **TypeScript/JavaScript**
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### **React Components**
```typescript
// ✅ Good
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### **Commit Messages**
Use [Conventional Commits](https://www.conventionalcommits.org/):
```bash
feat: add user authentication system
fix: resolve payment processing bug
docs: update API documentation
test: add unit tests for user service
```

### **File Organization**
```
src/
├── components/          # Reusable UI components
├── pages/              # Next.js pages
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles
└── __tests__/          # Test files
```

## 🧪 **Testing Guidelines**

### **Unit Tests**
- Test individual functions and components
- Use Jest and React Testing Library
- Aim for 80%+ code coverage
- Mock external dependencies

### **Integration Tests**
- Test component interactions
- Test API endpoints
- Use realistic test data
- Test error scenarios

### **Example Test**
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 📝 **Documentation Standards**

### **README Files**
- Clear project description
- Installation instructions
- Usage examples
- API documentation
- Contributing guidelines

### **Code Comments**
```typescript
/**
 * Calculates the total price including tax
 * @param basePrice - The base price before tax
 * @param taxRate - The tax rate as a decimal (e.g., 0.08 for 8%)
 * @returns The total price including tax
 */
function calculateTotalPrice(basePrice: number, taxRate: number): number {
  return basePrice * (1 + taxRate);
}
```

## 🐛 **Bug Reports**

When reporting bugs, please include:
- **Environment**: OS, browser, Node.js version
- **Steps to reproduce**: Clear, numbered steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Error messages**: Full error text

## 💡 **Feature Requests**

For feature requests, please provide:
- **Problem description**: What problem does this solve?
- **Proposed solution**: How should it work?
- **Alternatives considered**: Other approaches you've thought of
- **Use cases**: Real-world scenarios where this would be useful

## 🔍 **Code Review Process**

### **What We Look For**
- **Functionality**: Does the code work as intended?
- **Performance**: Is it efficient and optimized?
- **Security**: Are there any security concerns?
- **Maintainability**: Is the code clean and readable?
- **Testing**: Is there adequate test coverage?

### **Review Timeline**
- Initial review: Within 2-3 business days
- Follow-up reviews: Within 1-2 business days
- Merge: After all feedback is addressed

## 🏆 **Recognition**

Contributors will be:
- Added to the project's contributors list
- Mentioned in release notes for significant contributions
- Invited to collaborate on future features
- Credited in project documentation

## 📞 **Getting Help**

- **GitHub Issues**: For project-specific questions
- **GitHub Discussions**: For general discussions
- **Email**: [contact@kabilan.io](mailto:contact@kabilan.io)

## 📄 **License**

By contributing, you agree that your contributions will be licensed under the same license as the project (typically MIT).

---

**Thank you for contributing! 🙏**

*Your contributions help make these projects better for everyone.*
