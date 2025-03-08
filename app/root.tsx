import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import "./styles/global.css";
import { LAYOUT_FOR_ROUTES } from "./utils/constants/routes";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const matches = useMatches();

  const matchedLayout = LAYOUT_FOR_ROUTES.find((data) =>
    data.routes.includes(matches[matches.length - 1]?.pathname)
  );

  const LayoutComponent = matchedLayout
    ? matchedLayout.layout
    : ({ children }: { children: React.ReactNode }) => <>{children}</>;

  return (
    <LayoutComponent>
      <Outlet />
    </LayoutComponent>
  );
}
