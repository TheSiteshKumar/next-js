// pages/index.js - This will cause a hydration error

export default function Home() {
  return (
    <div className="container">
      <h1>Next.js Hydration Error Demo</h1>
      
      {/* This component causes hydration errors because it renders differently on server vs client */}
      <HydrationErrorComponent />
      
      <h2>Common Causes of Hydration Errors</h2>
      <ul>
        <li>Using browser APIs like <code>window</code> without client-side checks</li>
        <li>Different content rendering on server vs client</li>
        <li>Random values or dates that differ between renders</li>
        <li>Using client-only features in server components</li>
      </ul>
    </div>
  );
}

// This component causes a hydration error because it renders differently on server vs client
function HydrationErrorComponent() {
  // ❌ Problem: This will render current time on server, then different time on client
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className="error-component">
      <h2>This component has a hydration error</h2>
      <p>Current time: {currentTime}</p>
      <p style={{ color: 'red' }}>
        ⚠️ React will show a hydration error because the server rendered time 
        doesn't match the client rendered time
      </p>
    </div>
  );
}