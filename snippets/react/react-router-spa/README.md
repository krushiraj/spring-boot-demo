# React Router SPA

## What this demonstrates
- Client-side routing with React Router v6
- `BrowserRouter`, `Routes`, and `Route` for defining routes
- `Link` for navigation without page reloads
- `NavLink` with active styling based on current route
- `useParams` hook to read dynamic URL parameters (`:studentId`)
- A 404 catch-all route with `path="*"`

## How to run
```bash
npm install && npm run dev
```

## What to observe / try
- Click navigation links and notice the URL changes without a full page reload
- Watch the active link styling update in the navbar
- Click "View Details" on a student card and see the URL change to `/students/1`, etc.
- Manually type `/students/99` in the address bar to see the "Not Found" fallback
- Try typing a completely unknown URL (e.g., `/xyz`) to see the 404 route
- Open the Network tab -- no new HTML documents are fetched during navigation

## Key concepts
- **SPA**: Single HTML page, JavaScript swaps content based on the URL
- **BrowserRouter**: Uses the HTML5 History API to keep the URL in sync
- **Route params**: Dynamic segments like `:studentId` are extracted with `useParams()`
- **NavLink vs Link**: `NavLink` provides an `isActive` flag for styling the current route
- **Catch-all route**: `path="*"` matches any URL not matched by other routes
