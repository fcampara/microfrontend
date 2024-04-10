import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React from "react";
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
        <script
          type="importmap"
          dangerouslySetInnerHTML={{
            __html: `
{
  "imports": {
    "react": "https://esm.sh/react@18.0.0",
    "react/": "https://esm.sh/react@18.0.0/",
    "react-dom": "https://esm.sh/react-dom@18.0.0",
    "react-dom/": "https://esm.sh/react-dom@18.0.0/",
    "example": "http://localhost:8000/example@0.0.0/index.js"
  }
}
      `,
          }}
        />
        Shell in version {React.version}
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
