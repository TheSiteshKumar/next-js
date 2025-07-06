# Next.js Learning Repository

A comprehensive collection of Next.js examples and tutorials covering fundamental to advanced concepts. This repository contains 30 hands-on projects that demonstrate various Next.js features and best practices.

## 🚀 Getting Started

Each project is contained in its own directory with a complete Next.js application. To run any project:

```bash
cd [project-directory]
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Learning Modules

### Foundation Concepts

| Module | Topic | Description |
|--------|-------|-------------|
| [01-next-js-intro](./01-next-js-intro) | Next.js Introduction | Basic Next.js setup and project structure |
| [02-routing](./02-routing) | Basic Routing | File-based routing system in Next.js |
| [03-nested-routing](./03-nested-routing) | Nested Routes | Creating nested route structures |
| [04-dynamic-routing](./04-dynamic-routing) | Dynamic Routes | Dynamic route parameters with `[param]` |
| [05-nested-dynamic-routing](./05-nested-dynamic-routing) | Nested Dynamic Routes | Combining nested and dynamic routing |

### Advanced Routing

| Module | Topic | Description |
|--------|-------|-------------|
| [06-catch-all-routes](./06-catch-all-routes) | Catch-all Routes | Using `[...slug]` for flexible routing |
| [07-optional-catch-all-route](./07-optional-catch-all-route) | Optional Catch-all | Using `[[...slug]]` for optional parameters |
| [08-layouts](./08-layouts) | Layouts | Shared layouts and nested layouts |
| [09-metadata](./09-metadata) | Metadata API | Managing page metadata and SEO |
| [10-error-page](./10-error-page) | Error Handling | Custom error pages and error boundaries |
| [11-route-groups](./11-route-groups) | Route Groups | Organizing routes with `(group)` syntax |
| [12-private-folder](./12-private-folder) | Private Folders | Using `_folder` for private components |

### Rendering Strategies

| Module | Topic | Description |
|--------|-------|-------------|
| [13-rendering-paradigms](./13-rendering-paradigms) | Rendering Overview | Understanding different rendering methods |
| [14-static-vs-dynamic-ssr](./14-static-vs-dynamic-ssr) | SSR Comparison | Static vs Dynamic Server-Side Rendering |
| [15-static-site-generation-ssg](./15-static-site-generation-ssg) | Static Site Generation | Pre-rendering pages at build time |
| [16-incremental-static-regeneration-isr](./16-incremental-static-regeneration-isr) | ISR | Updating static content after deployment |
| [17-streaming-suspense](./17-streaming-suspense) | Streaming & Suspense | Progressive page loading with React Suspense |
| [18-hydration-error](./18-hydration-error) | Hydration Issues | Common hydration problems and solutions |

### Data Fetching & State Management

| Module | Topic | Description |
|--------|-------|-------------|
| [19-data-fetching-in-client](./19-data-fetching-in-client) | Client-side Fetching | Fetching data in client components |
| [20-data-fetching-in-server](./20-data-fetching-in-server) | Server-side Fetching | Fetching data in server components |
| [21-loading-state](./21-loading-state) | Loading States | Implementing loading UI patterns |
| [22-suspense-in-loading-state](./22-suspense-in-loading-state) | Suspense Loading | Advanced loading with React Suspense |
| [23-rendering-server-code-in-client](./23-rendering-server-code-in-client) | Server/Client Boundary | Managing server and client code separation |
| [24-context-api-in-next](./24-context-api-in-next) | Context API | Using React Context in Next.js applications |

### Error Handling

| Module | Topic | Description |
|--------|-------|-------------|
| [25-error-in-server-components](./25-error-in-server-components) | Server Component Errors | Error handling in server components |
| [26-error-in-nested-routes](./26-error-in-nested-routes) | Nested Route Errors | Error boundaries in nested routes |
| [27-global-error](./27-global-error) | Global Error Handling | Application-wide error handling |

### Styling & Optimization

| Module | Topic | Description |
|--------|-------|-------------|
| [28-css-module](./28-css-module) | CSS Modules | Component-scoped CSS styling |
| [29-tailwind-v4](./29-tailwind-v4) | Tailwind CSS v4 | Modern utility-first CSS framework |
| [30-next-image-optimization](./30-next-image-optimization) | Image Optimization | Next.js Image component and optimization |

## 🛠️ Technologies Used

- **Next.js** - React framework for production
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript (in applicable modules)
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Modules** - Scoped CSS styling

## 📖 Learning Path

### Beginner Track
1. Start with modules 01-05 for basic routing concepts
2. Learn layouts and metadata (08-09)
3. Understand error handling (10)
4. Practice with styling (28-29)

### Intermediate Track
1. Advanced routing patterns (06-07, 11-12)
2. Rendering strategies (13-16)
3. Data fetching patterns (19-20)
4. Loading states (21-22)

### Advanced Track
1. Streaming and Suspense (17)
2. Server/Client boundaries (23)
3. State management (24)
4. Advanced error handling (25-27)
5. Performance optimization (30)

## 🎯 Key Learning Outcomes

After completing these modules, you'll understand:

- **App Router**: Next.js 13+ App Router architecture
- **File-based Routing**: Automatic route generation
- **Server Components**: React Server Components in Next.js
- **Client Components**: When and how to use client-side rendering
- **Data Fetching**: Various strategies for loading data
- **Performance**: Optimization techniques and best practices
- **Error Handling**: Robust error management strategies
- **Styling**: Modern CSS approaches in Next.js

## 📝 Prerequisites

- Basic knowledge of JavaScript/TypeScript
- Familiarity with React concepts
- Understanding of HTML/CSS
- Node.js installed on your machine

## 🤝 Contributing

Feel free to contribute by:
- Adding new examples
- Improving existing code
- Fixing bugs
- Enhancing documentation

## 📄 License

This project is for educational purposes. Feel free to use and modify the code for learning.

## 🔗 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Happy Learning! 🚀**