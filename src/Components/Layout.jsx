import { Outlet, useLocation, Link } from "react-router-dom";
import { useState, useMemo } from "react";

export function Layout() {
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black dark:text-white text-black px-6 py-5">
      {/* сюда вставляем че хотим если хотим чтобы это отбражалось на всех страницах сайта */}

      {!isHomePage && (
        <header className="mb-10 flex items-center justify-between">
          <Link to="/">
            <img src="/nettt.svg" alt="Netflix" className="h-15 w-auto" />
          </Link>
        </header>
      )}
      <Outlet />
    </div>
  );
}
