import React from 'react';

// Simplified provider that just renders children directly.
// No Chakra UI dependencies.
export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Provider;
