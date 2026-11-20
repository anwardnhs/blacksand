import * as React from 'react';

const DialogContext = React.createContext<{ open: boolean; setOpen: (value: boolean) => void } | null>(null);

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

export function Dialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ children, asChild = false }: { children: React.ReactNode; asChild?: boolean }) {
  const context = React.useContext(DialogContext);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (event: React.MouseEvent) => {
        (children as React.ReactElement<any>).props.onClick?.(event);
        if (!event.defaultPrevented) context?.setOpen(true);
      },
    });
  }

  return (
    <button type="button" onClick={() => context?.setOpen(true)} className="text-left">
      {children}
    </button>
  );
}

export function DialogContent({ children, className }: { children: React.ReactNode; className?: string }) {
  const context = React.useContext(DialogContext);
  if (!context?.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60" onClick={() => context.setOpen(false)} />
      <div className={cn('relative z-10 max-h-[80vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl', className)}>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function DialogTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('text-2xl font-bold text-slate-900', className)}>{children}</h2>;
}
