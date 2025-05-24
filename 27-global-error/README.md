# Next.js Global Error Handling Demo

This project demonstrates a custom global error handling implementation in Next.js with a random display behavior.

## Features

- Global error handling with `global-error.js`
- Random error page display (50% chance)
- Test page to trigger errors
- Error logging to console
- Reset functionality
- Home navigation option

## Project Structure

```
app/
├── global-error.js       # Global error handler (reserved)
├── page.js              # Home page
└── throw-error/
    └── page.js          # Page that triggers errors
```

## How to Test

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/throw-error` in your browser

3. Click the "Throw Error" button to trigger an error

4. You will see one of two behaviors:
   - The error page will be displayed (50% chance)
   - Nothing will be displayed (50% chance)
   
   Note: In both cases, the error will be logged to the console.

## Error Page Features

When the error page is displayed, you can:
- View the error message
- Click "Try Again" to reset the error state
- Click "Go Home" to return to the homepage

## Implementation Details

- The global error handler uses `Math.random()` to determine whether to show the error page
- Errors are always logged to the console using `console.error`
- The error page is styled with Tailwind CSS
- The implementation uses the 'use client' directive for client-side functionality

## Notes

- This is a demonstration of custom error handling and should be modified for production use
- The random display behavior is for demonstration purposes only
- In a production environment, you would typically want to show error pages consistently
