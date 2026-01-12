# Next.js Migration Checklist (from Vite React)

This checklist helps you convert the current portfolio app to Next.js (App Router, Next 13+), keeping Tailwind and your component structure. It favors incremental, low-risk steps so you can verify quickly.

## 1) Decide App Router vs Pages Router

- Prefer App Router (recommended in Next 13+). It gives server components, layouts, and modern data-fetching.
- Target structure:
  - `app/layout.jsx` – global HTML shell + Tailwind global CSS import
  - `app/page.jsx` – home page (your current `App.jsx` composition)
  - Optional: `app/projects/page.jsx`, `app/about/page.jsx` if you want URL routes instead of in-page sections.

## 2) Initialize Next + Tailwind

1. Install Next, React, Tailwind (keep versions compatible):

```bash
npm i next@latest react react-dom
# Keep Tailwind; add @tailwindcss/forms if needed
```
z
2. Add Next scripts to `package.json`:

```json
{
	"scripts": {
		"dev": "next dev -p 5173", // optional: keep port
		"build": "next build",
		"start": "next start",
		"lint": "next lint"
	}
}
```

3. Tailwind: move your global CSS to `app/globals.css` and import it in `app/layout.jsx`.

- Your current file `src/styles/index.css` can be renamed to `app/globals.css` (same content):
  - `@tailwind base;`
  - `@tailwind components;`
  - `@tailwind utilities;`
- Keep component-scoped CSS files as-is or convert to Tailwind classes.

4. Update `tailwind.config.js` content paths:

```js
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: { extend: {} },
	plugins: [],
};
```

## 3) Create Next app files

- `app/layout.jsx`:

```jsx
export const metadata = {
	title: "Portfolio | Vince Gio Acedillo",
	description: "Front-end portfolio and projects",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
```

- `app/page.jsx` (wrap your current composition):

```jsx
// server component by default
import Portfolio from "../components/Portfolio";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";

export default function HomePage() {
	return (
		<>
			<ProgressBar />
			<Portfolio />
			<Projects />
			<AboutMe />
			<Footer />
		</>
	);
}
```

Note: Components that use `window`/`document` must be Client Components in Next. Add `'use client'` at the very top of those files: `Portfolio.jsx`, `Projects.jsx`, `ProgressBar.jsx`, `Footer.jsx`, and any component using `useEffect` with browser APIs.

## 4) Client vs Server Components

- Add `'use client'` to components touching `window`/`document` (e.g., scroll, event listeners):
  - `src/components/Portfolio.jsx`
  - `src/components/Projects.jsx`
  - `src/components/ProgressBar.jsx`
  - `src/components/Footer.jsx`
- Pure presentational components that don’t use browser APIs can remain server components (no directive required).

## 5) Images and `next/image`

- Preferred: move images to `public/` and reference as `/images/...`.
- Or keep static imports and switch to `next/image`:

```jsx
import Image from "next/image";
import profilePicture from "../images/aboutme.png";

<Image src={profilePicture} alt="Profile" className="rounded-full" />;
```

- For external images, configure `next.config.js` `images.domains`.

## 6) Routing and Links

- If you split sections into pages, create nested routes:
  - `app/projects/page.jsx`
  - `app/about/page.jsx`
- Replace `<a>` with Next `<Link>` for internal navigation:

```jsx
import Link from "next/link";
<Link href="/projects" className="hover:text-yellow-400">
	Projects
</Link>;
```

## 7) Metadata and SEO

- Use `app/layout.jsx` `metadata` for basic SEO.
- For per-page SEO, export `generateMetadata()` in route files.
- Add Open Graph/OG images via `metadata.openGraph`.

## 8) Environment Variables

- Replace `import.meta.env` (Vite) with `process.env.NEXT_PUBLIC_*`.
- Public client-side env keys must be prefixed `NEXT_PUBLIC_`.

## 9) Fonts and Icons

- Prefer `next/font` for Google/local fonts.
- Font Awesome works; continue or switch to `@next/font` for performance.

## 10) Data Fetching (if added later)

- Server Components can fetch directly:

```jsx
export default async function Page() {
	const res = await fetch("https://...");
	const data = await res.json();
	return <div>{data.title}</div>;
}
```

- Client Components use `useEffect` or SWR.

## 11) Build and Verify

- Commands:

```bash
npm run dev   # start Next server
npm run build # production build
npm run start # run build
```

- Validate:
  - All client components behave (no SSR window/document errors).
  - Styles loaded via `app/globals.css` and Tailwind.
  - Images render via `next/image` or `public/` paths.
  - Internal navigation uses `<Link>`.

## 12) Optional Cleanups (pre-migration)

- Centralize site metadata in `src/config/site.js` for reuse in Next `metadata`.
- Remove unused `react-router-dom` if you won’t use it in Next.
- Convert CSS files to Tailwind classes where feasible to simplify globals.
- Add ESLint config compatible with Next: `eslint-config-next`.

---

### Quick Mapping from Current Files

- `src/styles/index.css` → `app/globals.css`
- `src/App.jsx` → logic spread into `app/page.jsx`
- `src/components/*` → reuse directly; add `'use client'` where browser APIs are used.
- `src/images/*` → `public/images/*` or static imports with `next/image`.

This plan keeps your app’s visual/behavior intact while aligning with Next’s performance and DX advantages. Apply steps progressively and verify after each change.
