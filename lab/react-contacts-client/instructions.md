# React Contacts Management Client

This project is a React-based frontend for the contacts management system, designed to work with the Spring Boot REST Contacts API.

## Prerequisites

1. Node.js and npm installed
2. Spring Boot Contacts API running
3. Authentication API configured
4. Basic knowledge of React

## Project Structure

```
react-contacts-client/
├── src/
│   ├── components/         # React components
│   │   ├── contacts/      # Contact-related components
│   │   └── common/        # Shared components
│   ├── services/          # API services
│   ├── hooks/            # Custom hooks
│   └── utils/            # Utility functions
├── public/               # Static files
└── package.json         # Project configuration
```

## Key Features

1. Contact list display
2. Add/Edit contact forms
3. Delete confirmation
4. Search functionality
5. Pagination
6. Sorting options
7. Error handling
8. Loading states

## Component Overview

### 1. Contact Components
- Contact list table
- Contact form
- Search component
- Pagination controls
- Sort controls
- Delete confirmation

### 2. Common Components
- Form inputs
- Validation messages
- Loading indicators
- Error displays
- Modal dialogs

### 3. Service Integration
- Contact API client
- Error handling
- Data formatting
- Search/filter logic

## Lab Tasks

1. Contact List:
   - Create table component
   - Implement sorting
   - Add pagination
   - Create search bar

2. Contact Operations:
   - Build add form
   - Create edit form
   - Add delete confirmation
   - Implement validation

3. API Integration:
   - Create API service
   - Handle responses
   - Manage errors
   - Add loading states

4. Additional Features:
   - Add search
   - Implement filters
   - Create bulk actions
   - Add data export

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

1. Component Design:
   - Keep components small
   - Use prop types
   - Follow naming conventions
   - Implement error boundaries

2. State Management:
   - Use appropriate hooks
   - Implement caching
   - Handle loading states
   - Manage form state

3. User Experience:
   - Add loading indicators
   - Show error messages
   - Implement confirmations
   - Add success feedback

## Common Issues

1. API Integration:
   - Check endpoints
   - Verify data format
   - Handle errors
   - Test responses

2. Form Handling:
   - Validate inputs
   - Handle submissions
   - Show error states
   - Clear form data

3. Performance:
   - Optimize renders
   - Implement pagination
   - Cache responses
   - Debounce searches

## Additional Features

1. Contact categories
2. Bulk operations
3. Data import/export
4. Advanced search
5. Contact sharing
6. Activity history

## Testing Requirements

1. Component Tests:
   - List rendering
   - Form submission
   - Error handling
   - User interactions

2. Integration Tests:
   - API calls
   - Data flow
   - State updates
   - Error scenarios

3. UI Tests:
   - Responsive design
   - Accessibility
   - Loading states
   - Error states

## Resources

1. React Documentation:
   - [Official Docs](https://react.dev/)
   - [React Query](https://tanstack.com/query/latest/)
   - [React Hook Form](https://react-hook-form.com/)

2. UI Resources:
   - [Material-UI](https://mui.com/)
   - [Tailwind CSS](https://tailwindcss.com/)
   - [React Icons](https://react-icons.github.io/react-icons/)

3. Development Tools:
   - [React DevTools](https://react.dev/learn/react-developer-tools)
   - [VS Code Extensions](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
   - [Chrome DevTools](https://developer.chrome.com/docs/devtools/)