# React Authentication Client

This project is a React-based frontend for the authentication system, designed to work with the Spring Boot REST Authentication API.

## Prerequisites

1. Node.js and npm installed
2. Spring Boot Auth API running
3. Basic knowledge of React and JWT
4. Modern web browser

## Project Structure

```
react-auth-client/
├── src/
│   ├── components/         # React components
│   ├── services/          # API services
│   ├── context/          # React context
│   ├── hooks/            # Custom hooks
│   └── utils/            # Utility functions
├── public/               # Static files
└── package.json         # Project configuration
```

## Key Features

1. User Registration form
2. Login form with validation
3. JWT-based authentication
4. Protected routes
5. Persistent authentication
6. Error handling
7. Loading states
8. Responsive design

## Component Overview

### 1. Authentication Components
- Login form
- Registration form
- Protected route wrapper
- Authentication context
- Token management

### 2. Common Components
- Form inputs
- Validation messages
- Loading spinners
- Error alerts
- Navigation header

### 3. Service Integration
- Auth API client
- Token management
- Axios interceptors
- Error handling

## Lab Tasks

1. User Interface:
   - Create login form
   - Build registration form
   - Add form validation
   - Implement loading states

2. Authentication:
   - Implement JWT storage
   - Add protected routes
   - Create auth context
   - Handle token refresh

3. API Integration:
   - Create API service
   - Add interceptors
   - Handle responses
   - Manage errors

4. Testing:
   - Write component tests
   - Test form validation
   - Check API integration
   - Verify auth flow

## Development Workflow

1. Setup:
   ```bash
   npm install
   npm run dev
   ```

2. Development:
   - Start backend server
   - Run frontend in dev mode
   - Use React DevTools
   - Test in browser

3. Testing:
   ```bash
   npm run test
   ```

## Best Practices

1. Code Organization:
   - Use functional components
   - Implement proper hooks
   - Follow folder structure
   - Write clean code

2. State Management:
   - Use React Context
   - Implement custom hooks
   - Manage local state
   - Handle side effects

3. Security:
   - Secure token storage
   - Validate user input
   - Handle errors properly
   - Implement logout

## Common Issues

1. API Connection:
   - Check API URL
   - Verify CORS settings
   - Test endpoints
   - Check network tab

2. Authentication:
   - Token storage issues
   - Login persistence
   - Route protection
   - Token expiration

3. Form Handling:
   - Validation errors
   - Submit handling
   - Error messages
   - Loading states

## Additional Features

1. Remember me functionality
2. Password strength meter
3. Social login integration
4. Profile management
5. Password reset flow
6. Multi-factor auth

## Resources

1. React Documentation:
   - [Official Docs](https://react.dev/)
   - [React Router](https://reactrouter.com/)
   - [JWT Handling](https://jwt.io/)

2. Testing Resources:
   - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
   - [Jest](https://jestjs.io/)

3. Development Tools:
   - [React DevTools](https://react.dev/learn/react-developer-tools)
   - [VS Code React Extensions](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)