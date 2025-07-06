# Next.js Context API Implementation - Theme Toggle App

This project demonstrates how to implement and use React's Context API (`useContext`) in a Next.js application to manage global state across components.

## 🎯 Project Overview

A simple Next.js application that implements a theme toggle feature (light/dark mode) using React Context API. The theme state is shared across all components without prop drilling.

## 🚀 Tech Stack

- **Next.js 15.3.2** - React framework
- **React 19.0.0** - UI library
- **Tailwind CSS 4** - Styling
- **React Context API** - State management

## 📋 Table of Contents

1. [The Problem](#-the-problem)
2. [The Solution](#-the-solution)
3. [Why Use Context API?](#-why-use-context-api)
4. [Step-by-Step Implementation](#-step-by-step-implementation)
5. [Project Structure](#-project-structure)
6. [Getting Started](#-getting-started)
7. [Key Concepts](#-key-concepts)

## 🔥 The Problem

### Scenario: Prop Drilling Hell

Imagine you have a component tree like this:

```
App
├── Header (needs theme state)
├── Main
│   ├── HomePage (needs theme state)
│   ├── AboutPage (needs theme state)
│   └── ContactPage (needs theme state)
└── Footer (needs theme state)
```

**Without Context API**, you would need to:

1. Store theme state in the root component
2. Pass it down through props to every single component
3. Pass toggle function down through props
4. Create a chain of props through intermediate components

```jsx
// ❌ Bad: Prop drilling approach
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <div>
      <Header isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
      <Main isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

function Main({ isDarkMode }) {
  return (
    <div>
      <HomePage isDarkMode={isDarkMode} />
      <AboutPage isDarkMode={isDarkMode} />
    </div>
  );
}
```

**Problems with this approach:**
- 🔄 **Prop drilling**: Passing props through components that don't need them
- 🔧 **Hard to maintain**: Adding new components requires updating parent components
- 📈 **Scalability issues**: Gets messy with more components and deeper nesting
- 🐛 **Error prone**: Easy to forget passing props or make typos

## ✅ The Solution

### Context API to the Rescue!

With Context API, we create a "global store" that any component can access directly, without prop drilling.

```jsx
// ✅ Good: Context API approach
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

function Header() {
  const { isDarkMode, toggleTheme } = useTheme(); // Direct access!
  // No props needed!
}
```

## 🤔 Why Use Context API?

### Benefits:

1. **🚫 Eliminates Prop Drilling**: Components can access global state directly
2. **🔄 Centralized State Management**: All theme logic in one place
3. **🎯 Clean Component Interface**: Components only receive props they actually need
4. **📈 Better Scalability**: Easy to add new components without touching parent components
5. **🔧 Easier Maintenance**: Update theme logic in one place
6. **🎨 Separation of Concerns**: Business logic separated from UI components

### When to Use Context API:

- ✅ Theme preferences (dark/light mode)
- ✅ User authentication state
- ✅ Language/locale settings
- ✅ Shopping cart state
- ✅ Any data that many components need

### When NOT to Use Context API:

- ❌ Local component state (use `useState`)
- ❌ Form inputs (use local state or form libraries)
- ❌ Simple parent-child communication (use props)
- ❌ Heavy computations (consider useMemo/useCallback)

## 🛠 Step-by-Step Implementation

### Step 1: Create the Context and Provider

Create `app/context/ThemeContext.js`:

```jsx
'use client';
import { createContext, useContext, useState } from 'react';

// Step 1: Create the context
const ThemeContext = createContext();

// Step 2: Create the Provider component
export function ThemeProvider({ children }) {
  // Step 3: Define the state and functions
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Step 4: Provide the value to all children
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 5: Create a custom hook for easy access
export function useTheme() {
  const context = useContext(ThemeContext);
  
  // Optional: Add error handling
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}
```

**What's happening here?**

1. **`createContext()`**: Creates a new context object
2. **`ThemeProvider`**: Wrapper component that provides the context value
3. **`useState`**: Manages the theme state (light/dark)
4. **`toggleTheme`**: Function to switch between themes
5. **`useTheme`**: Custom hook that makes it easy to access theme context

### Step 2: Wrap Your App with the Provider

In `app/layout.js`:

```jsx
import { ThemeProvider } from './context/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Step 1: Wrap your app with ThemeProvider */}
        <ThemeProvider>
          <ThemeWrapper>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto p-4">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Why wrap at the top level?**
- Makes theme context available to ALL components in the app
- Follows the "provider pattern" - providers at the top, consumers below

### Step 3: Create a Theme Wrapper Component

Create `app/components/ThemeWrapper.js`:

```jsx
'use client';
import { useTheme } from '../context/ThemeContext';

export default function ThemeWrapper({ children }) {
  // Step 1: Access theme state using our custom hook
  const { isDarkMode } = useTheme();
  
  // Step 2: Apply theme-based styles
  return (
    <div className={isDarkMode ? 'bg-gray-900 min-h-screen' : 'bg-white min-h-screen'}>
      {children}
    </div>
  );
}
```

**Purpose:**
- Applies theme-based background colors to the entire app
- Demonstrates how to consume context in a component

### Step 4: Use Context in Components

#### Header Component (`app/components/Header.js`):

```jsx
'use client';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  // Step 1: Access both state and functions from context
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
        {/* Step 2: Use the toggle function */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {isDarkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
}
```

#### Home Page (`app/page.js`):

```jsx
'use client';
import { useTheme } from './context/ThemeContext';

export default function Home() {
  // Step 1: Access only the state we need
  const { isDarkMode } = useTheme();

  return (
    <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Simple App</h1>
      <p className="text-xl">This is a simple Next.js app with theme toggle functionality.</p>
    </div>
  );
}
```

**Key Points:**
- Components only import what they need from context
- No props required for theme state
- Components can be moved anywhere in the tree without breaking

## 📁 Project Structure

```
app/
├── context/
│   └── ThemeContext.js          # Context definition and provider
├── components/
│   ├── Header.js                # Navigation with theme toggle
│   ├── Footer.js                # Footer component
│   └── ThemeWrapper.js          # Theme-aware wrapper
├── about/
│   └── page.js                  # About page
├── contact/
│   └── page.js                  # Contact page
├── layout.js                    # Root layout with provider
├── page.js                      # Home page
└── globals.css                  # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd 24-context-api-in-next
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎓 Key Concepts

### 1. Context Creation
```jsx
const ThemeContext = createContext();
```
- Creates a context object
- Default value can be provided: `createContext(defaultValue)`

### 2. Provider Pattern
```jsx
<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
  {children}
</ThemeContext.Provider>
```
- Provider makes the value available to all children
- Value can be any JavaScript data type

### 3. Context Consumption
```jsx
const { isDarkMode, toggleTheme } = useContext(ThemeContext);
```
- `useContext` hook accesses the context value
- Must be used within a Provider component

### 4. Custom Hook Pattern
```jsx
export function useTheme() {
  return useContext(ThemeContext);
}
```
- Encapsulates context logic
- Provides better developer experience
- Can include error handling

### 5. Next.js Client Components
```jsx
'use client';
```
- Required for components using React hooks
- Indicates client-side rendering

## 🔍 How It Works

### Data Flow:

1. **Context Creation**: `ThemeContext` is created
2. **Provider Setup**: `ThemeProvider` wraps the app in `layout.js`
3. **State Management**: `useState` manages theme state in the provider
4. **Context Distribution**: Provider makes state available to all children
5. **Component Access**: Components use `useTheme()` to access state
6. **State Updates**: `toggleTheme()` updates state, triggering re-renders

### Re-rendering Behavior:

- When context value changes, ALL components using that context re-render
- Only components consuming the context are affected
- Components not using context remain unaffected

### Best Practices Demonstrated:

1. **Custom Hooks**: `useTheme()` instead of direct `useContext()`
2. **Error Handling**: Check if context is used within provider
3. **Separation of Concerns**: Context logic separate from UI
4. **Provider at Root**: Makes context available everywhere
5. **Descriptive Naming**: Clear function and variable names

## 🔧 Extending the Implementation

### Adding New Context Values:

```jsx
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('medium'); // New state

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeFontSize = (size) => { // New function
    setFontSize(size);
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      fontSize,        // Add to context
      changeFontSize   // Add to context
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Multiple Contexts:

```jsx
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <YourAppComponents />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
```

## 🎯 Learning Outcomes

After exploring this project, you'll understand:

1. **Context API Fundamentals**: How to create and use React Context
2. **Provider Pattern**: How to structure context providers
3. **Custom Hooks**: Creating reusable context hooks
4. **Next.js Integration**: Using Context API in Next.js applications
5. **State Management**: Managing global state without external libraries
6. **Component Architecture**: Building scalable component structures

## 🤝 Contributing

Feel free to contribute to this project by:

1. Adding new features
2. Improving documentation
3. Fixing bugs
4. Enhancing styling

## 📚 Further Reading

- [React Context API Documentation](https://react.dev/reference/react/useContext)
- [Next.js Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [React Hooks Guide](https://react.dev/reference/react/hooks)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy Coding! 🚀**

*This project demonstrates the power of React Context API in building scalable applications without prop drilling.*