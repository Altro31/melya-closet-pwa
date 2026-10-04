import { dbClient } from '#/lib/db/client.ts';
import { DbProvider as TanStackDbProvider } from '@tanstack/react-db';

interface DbProviderProps {
    children: React.ReactNode;
}

export function DbProvider({ children }: DbProviderProps) {
   
    return (
        <TanStackDbProvider client={dbClient}>
            {children}
        </TanStackDbProvider>
    );
}
