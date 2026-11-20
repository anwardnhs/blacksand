import * as React from 'react';

const TabsContext = React.createContext<{ value?: string; onValueChange?: (value: string) => void } | null>(null);

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

export function Tabs({ value, onValueChange, children, className }: { value?: string; onValueChange?: (value: string) => void; children: React.ReactNode; className?: string; }) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={cn(className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string; }) {
  return <div className={cn('flex gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1', className)}>{children}</div>;
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string; }) {
  const context = React.useContext(TabsContext);
  const active = context?.value === value;

  return (
    <button
      type="button"
      className={cn(
        'rounded-md px-3 py-2 text-sm font-medium transition-colors',
        active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900',
        className,
      )}
      onClick={() => context?.onValueChange?.(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const context = React.useContext(TabsContext);
  if (context?.value !== value) return null;

  return <div className={cn(className)}>{children}</div>;
}
