// Re-export the actual TSX implementation so this file (index.ts) doesn't
// cause JSX/TS parse errors. The runtime/imports can continue to import
// from './theme' and resolve to the TSX provider.
export { Provider } from './index.tsx';
export { default } from './index.tsx';
