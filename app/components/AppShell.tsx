import { CustomerHeader } from "./CustomerHeader";
import { SideNav } from "./SideNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
      <SideNav />
      <div className="min-w-0">
        <CustomerHeader />
        <main className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
