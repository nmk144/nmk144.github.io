import { ReactNode } from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className={`${className}`}>
        {children}
      </main>
      <footer className="bg-muted mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © 2024 Alex Johnson. Built with precision and purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;