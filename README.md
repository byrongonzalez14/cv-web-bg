# byrongonzalez.com.co — v2

Sitio profesional de Byron González (AI Solutions Consultant), reconstruido como sitio multi-página con Next.js.

🌐 **Producción:** [byrongonzalez.com.co](https://byrongonzalez.com.co)

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (tokens en `src/app/globals.css` vía `@theme`)
- **next-intl** — i18n con rutas localizadas: español en raíz (`/servicios`), inglés con prefijo (`/en/services`)
- **motion** (framer-motion v12) + **Lenis** — animaciones y smooth scroll
- **Resend** — formulario de contacto vía Server Action
- **GTM + Consent Mode v2 + Vercel Analytics/Speed Insights** — analítica

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción (todo SSG)
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa:

| Variable | Para qué | Dónde se crea |
|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (GA4 + Clarity van dentro del contenedor) | tagmanager.google.com |
| `RESEND_API_KEY` | Envío del formulario de contacto | resend.com |
| `CONTACT_FROM` | Remitente del email (verificar dominio en Resend) | — |
| `CONTACT_TO` | Correo donde llegan los mensajes | — |

Sin estas variables el sitio funciona igual: sin GTM no se carga tracking de Google, y el formulario muestra un error amable.

## Estructura

- `src/app/[locale]/` — páginas: Home, quien-soy, servicios, experiencia, contacto, privacidad
- `src/i18n/routing.ts` — fuente única de verdad de rutas/slugs por idioma (la usan proxy, sitemap y hreflang)
- `src/content/` — datos del CV y servicios por idioma (edita aquí el contenido)
- `messages/{es,en}.json` — textos de UI
- `src/lib/actions/contact.ts` — server action del formulario (zod + honeypot + Resend)
- `src/components/analytics/` — GTM, Consent Mode v2 regional y banner de consentimiento

## Eventos de analítica (dataLayer)

`generate_lead` (formulario enviado) · `file_download` (descarga de CV) · `click_whatsapp` · `click_linkedin` · `click_email`

Configúralos como key events en GA4 vía triggers de GTM.

## Checklist de lanzamiento

1. Crear cuentas: GTM, GA4, Microsoft Clarity, Resend → poner IDs en Vercel (Environment Variables).
2. En GTM: tag de GA4 + tag de Clarity + triggers para los eventos custom.
3. Deploy en Vercel, activar Analytics y Speed Insights en el dashboard.
4. Apuntar el dominio `byrongonzalez.com.co` al proyecto nuevo.
5. Google Search Console: verificar dominio (DNS TXT) y enviar `sitemap.xml`.
6. Validar con Rich Results Test (Person, FAQPage, ProfessionalService).
