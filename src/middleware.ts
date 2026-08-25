import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const { request, cookies } = context;
  const url = new URL(request.url);

  // Only auto-redirect at the root — all other paths are served as-is
  if (url.pathname !== '/') return next();

  const savedLang = cookies.get('lang')?.value;
  if (savedLang === 'de') return next();
  if (savedLang === 'en') return context.redirect('/en/', 302);

  // No cookie: check Vercel geo header (absent in local dev → default to German)
  const country = request.headers.get('x-vercel-ip-country');
  if (country && country !== 'DE') return context.redirect('/en/', 302);

  return next();
});
