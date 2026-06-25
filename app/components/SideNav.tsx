"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../data/simulator";

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-slate-200 bg-[#101828] text-white lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:border-slate-900">
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-4 py-5 sm:px-6 lg:px-5">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-cyan-400 font-bold text-slate-950">
              CS
            </div>
            <div>
              <div className="text-sm font-semibold">SuccessOS</div>
              <div className="text-xs text-slate-300">Simulation workspace</div>
            </div>
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:flex-1 lg:flex-col lg:overflow-visible lg:px-3">
          {routes.map((route, index) => {
            const isActive =
              pathname === route.href || pathname.startsWith(`${route.href}/`);

            return (
              <Link
                key={route.href}
                href={route.href}
                className={`group flex min-w-fit items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition lg:min-w-0 ${
                  isActive
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  className={`grid size-7 shrink-0 place-items-center rounded-md text-xs font-bold ${
                    isActive
                      ? "bg-cyan-100 text-cyan-800"
                      : "bg-white/10 text-slate-200 group-hover:bg-white/15"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="truncate">{route.shortLabel}</span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden border-t border-white/10 p-5 lg:block">
          <div className="rounded-md bg-white/10 p-4">
            <div className="text-xs font-semibold uppercase text-cyan-200">
              Current motion
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Simulate the full enterprise success cycle from discovery to
              executive renewal review.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
