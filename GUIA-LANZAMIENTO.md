# Guía de lanzamiento — paso a paso

Todo lo que necesitas crear, en orden, con el paso exacto donde sale cada credencial. Tiempo total estimado: **1 a 1.5 horas**. Usa tu cuenta de Google personal (byrongonzalezing@gmail.com) para todo lo de Google, así queda todo bajo el mismo dueño.

## ¿Qué es imprescindible y qué puede esperar?

El sitio está construido para funcionar sin ninguna credencial — cada pieza se "enciende" cuando agregues su variable, sin tocar código.

| Prioridad | Paso | Por qué |
|---|---|---|
| 🔴 **Necesario para publicar** | 5. Vercel (reemplazo del repo) | Sin esto no hay sitio nuevo en línea. |
| 🟠 **Recomendado en la primera semana** | 4. Resend (solo la API key, 5 min) | Es lo único que un visitante nota: sin la key, el formulario muestra error al enviar. Los botones de email/WhatsApp/LinkedIn funcionan igual. |
| 🟡 **Cuando puedas (no pierdes nada permanente)** | 1. GA4 · 2. GTM · 3. Clarity | Sin `NEXT_PUBLIC_GTM_ID` el sitio simplemente no carga tracking de Google. Eso sí: los datos empiezan a contarse desde que lo actives — cada semana sin GA4 es una semana de métricas que no existirán. Vercel Analytics sí mide desde el día uno sin configurar nada. |
| 🟡 **Cuando puedas** | 6. Search Console | Google indexa el sitio solo de todas formas; Search Console lo acelera y te da las keywords. Se puede hacer semanas después. |
| ⚪ **Opcional** | Dominio verificado en Resend (paso 4.5) | Solo mejora la entregabilidad del email. |

> **Nota de idiomas**: los productos de Google pueden aparecerte en inglés o español según la cuenta. Cada botón/menú va así: **Nombre en inglés** *(nombre en español)* — busca el que veas en tu pantalla.

---

## 1. Google Analytics 4 → obtener `G-XXXXXXXXXX` (~10 min)

1. Entra a **https://analytics.google.com** con tu cuenta de Google.
2. Si es tu primera vez: botón **Start measuring** *(Empezar a medir)*. Si ya tienes cuenta: engranaje **Admin** *(Administrar)*, abajo a la izquierda → **Create** *(Crear)* → **Property** *(Propiedad)*.
3. **Account name** *(Nombre de la cuenta)*: `Byron Gonzalez` → **Next** *(Siguiente)*.
4. **Property name** *(Nombre de la propiedad)*: `byrongonzalez.com.co` · **Time zone** *(Zona horaria)*: `Colombia (GMT-5)` · **Currency** *(Moneda)*: la que prefieras → **Next**.
5. Datos del negocio: **Industry category** *(Categoría)*: `Technology` · **Business size** *(Tamaño)*: `Small` → en objetivos marca **Generate leads** *(Generar clientes potenciales)* → **Create** (acepta los términos).
6. En **Choose a platform** *(Elige una plataforma)* selecciona **Web**.
7. **Website URL**: `byrongonzalez.com.co` · **Stream name** *(Nombre del stream)*: `Web` → **Create stream** *(Crear stream)*.
8. 🎯 En la pantalla que se abre verás **Measurement ID** *(ID de medición)* arriba a la derecha: `G-XXXXXXXXXX`. **Cópialo y guárdalo.**
9. No instales ninguna etiqueta manualmente — eso lo hará GTM (paso 2).

Extra recomendado (2 min): en **Admin → Data settings → Data retention** *(Administrar → Configuración de datos → Retención de datos)*, cambia de 2 meses a **14 months**.

---

## 2. Google Tag Manager → obtener `GTM-XXXXXXX` (~20 min)

### 2a. Crear el contenedor

1. Entra a **https://tagmanager.google.com**.
2. **Create Account** *(Crear cuenta)*: **Account Name** `Byron Gonzalez` · **Country** `Colombia`.
3. **Container name** *(Nombre del contenedor)*: `byrongonzalez.com.co` · **Target platform**: **Web** → **Create** *(Crear)* y acepta términos.
4. 🎯 Te mostrará un popup con código para instalar — **ciérralo, no necesitas copiar código** (el sitio ya lo integra). Arriba a la derecha verás el ID: **`GTM-XXXXXXX`**. **Cópialo y guárdalo.**

### 2b. Conectar GA4 dentro de GTM

1. En el contenedor, menú izquierdo → **Tags** *(Etiquetas)* → botón **New** *(Nueva)*.
2. Arriba a la izquierda, donde dice *"Untitled Tag"* *(Etiqueta sin título)*, escribe: `GA4 - Config`.
3. Clic en el recuadro **Tag Configuration** *(Configuración de la etiqueta)* → en la lista elige **Google Tag** *(Etiqueta de Google)*.
4. En el campo **Tag ID** *(ID de etiqueta)* pega tu `G-XXXXXXXXXX` del paso 1.
5. Clic en el recuadro **Triggering** *(Activación)*, abajo → elige **Initialization - All Pages** → **Save** *(Guardar)*.

### 2c. Etiquetas para los eventos de conversión

El sitio ya envía estos eventos al dataLayer: `generate_lead`, `file_download`, `click_whatsapp`, `click_linkedin`, `click_email`. Para que GA4 los reciba:

1. *(Opcional — si lo saltas, todo funciona igual)* Menú **Variables** → sección **User-Defined Variables** → **New** → clic en **Variable Configuration** → sección *Page Variables* → **Data Layer Variable**. Ojo, hay dos "nombres" distintos:
   - En el campo **Data Layer Variable Name** escribe: `method` (exacto, es el dato que envía el sitio).
   - Arriba a la izquierda, donde dice *"Untitled Variable"*, escribe: `dlv - method` (nombre interno; "dlv" es solo convención).
   - **Data Layer Version** se deja en *Version 2* y **Set Default Value** sin marcar → **Save**.
2. Menú **Triggers** → **New** → clic en **Trigger Configuration** → baja hasta la sección **Other** → elige **Custom Event**:
   - En **Event Name** escribe: `generate_lead` (exacto).
   - *This trigger fires on*: se deja en **All Custom Events**.
   - Arriba a la izquierda renombra *"Untitled Trigger"* a: `Event - generate_lead` → **Save**.
   - Repite lo mismo para: `file_download`, `click_whatsapp`, `click_linkedin`, `click_email` (5 triggers en total; en cada uno el **Event Name** debe ser idéntico al nombre del evento).
3. Menú **Tags** → **New** → clic en **Tag Configuration** → elige **Google Analytics: GA4 Event**:
   - En **Measurement ID** pega tu `G-XXXXXXXXXX`.
   - En **Event Name** escribe: `generate_lead`.
   - Clic en **Triggering** → selecciona el trigger `Event - generate_lead`.
   - Arriba a la izquierda renombra a: `GA4 - generate_lead` → **Save**.
   - Repite para los otros 4 eventos (5 tags en total, cada una con su trigger correspondiente).

### 2d. Publicar

1. Botón azul **Submit** (arriba a la derecha) → **Version Name**: `v1 - GA4 + eventos` → botón **Publish**.
2. ⚠️ GTM no hace nada hasta que publicas. Cada cambio futuro requiere volver a **Submit → Publish**.

---

## 3. Microsoft Clarity → mapas de calor y grabaciones (~10 min)

> Clarity sí se muestra en español (los menús de GTM del punto 4 siguen en inglés).

1. Entra a **https://clarity.microsoft.com** → **Iniciar sesión** / **Registrarse** (puedes entrar con la cuenta de Google).
2. Botón **"Nuevo proyecto"** (o **"Agregar nuevo proyecto"**):
   - **Nombre**: `byrongonzalez.com.co`
   - **URL del sitio web**: `https://byrongonzalez.com.co`
   - **Categoría del sitio**: la que aplique → **Agregar** / **Crear**.
3. Al crear el proyecto te pregunta cómo quieres instalarlo:
   - Elige **"Instalar manualmente"** (a veces aparece como "Instalar el código de seguimiento manualmente"). Verás un bloque de código JavaScript.
   - Si no te lo preguntó o cerraste esa pantalla: menú **Configuración** (engranaje) → **Configuración** → sección **Instalación** → **Instalar manualmente**.
   - 🎯 **Copia el bloque de código completo** (botón "Copiar al portapapeles"). Dentro del código, en la línea `"clarity", "script", "xxxxxxxxxx"`, va tu ID de proyecto — no necesitas copiarlo aparte, viene incluido en el código.
   - *Nota: Clarity también ofrece "Instalar en una plataforma de terceros → Google Tag Manager". No la uses — pide permisos de acceso a tu GTM y es más fácil pegar el código a mano (paso 4).*
4. Instalarlo vía GTM (así el consentimiento lo controla todo junto):
   1. En GTM → **Tags** → **New** → clic en **Tag Configuration** → sección *Custom* → **Custom HTML**.
   2. Pega el código completo de Clarity (con sus `<script>...</script>`) y renombra la tag a `Clarity`.
   3. Clic en **Triggering** → elige **All Pages** → **Save**.
   4. **Submit → Publish** de nuevo.
5. Clarity empieza a mostrar grabaciones ~2 horas después del deploy con tráfico real.

---

## 4. Resend → obtener `RESEND_API_KEY` (~10 min)

1. Entra a **https://resend.com** → **Sign up** (con GitHub o email). Plan gratis: 3.000 emails/mes, de sobra.
2. Menú izquierdo → **API Keys** → **Create API Key**:
   - Nombre: `cv-web`
   - Permission: **Sending access** · Domain: All domains
3. 🎯 Copia la key (`re_...`) **inmediatamente** — solo se muestra una vez. Guárdala.
4. **Funciona ya mismo** con el remitente de prueba `onboarding@resend.dev` (el sitio ya viene configurado así). Los mensajes te llegarán a byrongonzalezing@gmail.com.
5. **Opcional pero recomendado** (para que el email salga de tu dominio y no caiga en spam):
   1. Menú **Domains** → **Add Domain** → escribe `byrongonzalez.com.co`.
   2. Resend te mostrará 3 registros DNS (SPF y DKIM, tipo TXT/MX/CNAME según el caso).
   3. Ve al panel DNS de tu dominio (donde compraste byrongonzalez.com.co) y agrega esos registros tal cual.
   4. En Resend, botón **Verify** — puede tardar hasta 1 hora.
   5. Cuando esté verificado, cambia en Vercel la variable `CONTACT_FROM` a: `Byron González <web@byrongonzalez.com.co>`.

---

## 5. Vercel — reemplazar el sitio actual en el mismo proyecto (~15 min)

> **Contexto**: el proyecto de Vercel ya existe, atado al repo `byrongonzalez14/cv-web-bg`, y el dominio ya apunta ahí. **No se crea un proyecto nuevo** — se sube el código nuevo al mismo repo y Vercel despliega solo. El dominio, el proyecto y sus configuraciones no se tocan.

### 5a. Subir el código nuevo al repo existente (en una rama primero)

Byron: esto te lo puedo hacer yo con un comando cuando digas. La idea:

1. El código nuevo (`cv-web-bg-v2`) se sube al repo `cv-web-bg` en una **rama** llamada `v2` (sin tocar `main` todavía).
2. Vercel detecta la rama automáticamente y crea un **Preview Deployment**: una URL tipo `cv-web-bg-git-v2-....vercel.app` donde ves el sitio nuevo funcionando en el entorno real de Vercel, mientras `byrongonzalez.com.co` sigue mostrando el viejo.
3. Cuando estés conforme, se hace merge de `v2` a `main` → Vercel despliega a producción → tu dominio muestra el sitio nuevo. El viejo queda en el historial de git (recuperable siempre).

### 5b. Revisar la configuración de build del proyecto (importante ⚠️)

El sitio viejo es Vite y el nuevo es Next.js. Si el proyecto de Vercel tiene configuración manual de Vite, el build fallará. Antes del merge a main:

1. En Vercel → tu proyecto → **Settings → Build and Deployment**.
2. **Framework Preset**: debe decir **Next.js** (si dice "Vite" u "Other", cámbialo).
3. **Build Command** y **Output Directory**: deben estar en **default/automático** (sin override). Si hay algo escrito tipo `vite build` o `dist`, bórralo (toggle de override apagado).
4. **Node.js Version** (en Settings → General o en la misma sección): 20.x o superior.
5. El preview de la rama `v2` (paso 5a.2) te confirma si el build pasa antes de tocar producción.

### 5c. Variables de entorno (se pueden agregar después, cuando las tengas)

Proyecto → **Settings → Environment Variables** → **Add** (marca Production y Preview):

| Name | Value | Cuándo |
|---|---|---|
| `RESEND_API_KEY` | `re_...` (paso 4) | 🟠 Primera semana — activa el formulario |
| `CONTACT_FROM` | `Web <onboarding@resend.dev>` | junto con la anterior |
| `CONTACT_TO` | `byrongonzalezing@gmail.com` | junto con la anterior |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` (paso 2) | 🟡 cuando termines GTM |

⚠️ Después de agregar o cambiar una variable, Vercel NO la aplica sola: pestaña **Deployments** → botón `...` del último deployment → **Redeploy**.

### 5d. Activar analytics de Vercel (2 min, el código ya está en el sitio)

- En el proyecto → pestaña **Analytics** → **Enable**.
- Pestaña **Speed Insights** → **Enable**.

### 5e. Dominio

**No hay que hacer nada** — ya apunta al proyecto. En el momento del merge a `main`, byrongonzalez.com.co pasa a mostrar el sitio nuevo automáticamente.

---

## 6. Google Search Console — indexación (~10 min, después del deploy)

1. Entra a **https://search.google.com/search-console**.
2. **Agregar propiedad** → elige el tipo **"Dominio"** (cubre www, sin www, http y https) → escribe `byrongonzalez.com.co`.
3. Google te da un registro **TXT** (algo como `google-site-verification=...`). Agrégalo en tu panel DNS como registro TXT en la raíz del dominio.
4. Espera unos minutos → botón **Verificar**.
5. ⚠️ **Este paso solo funciona cuando el sitio NUEVO ya esté en producción** (el viejo no tiene sitemap y da 404). Una vez desplegado: menú **Sitemaps** → escribe la URL **completa**: `https://byrongonzalez.com.co/sitemap.xml` (en propiedades tipo "Dominio", Search Console rechaza rutas cortas como `sitemap.xml` con el error "Invalid sitemap address") → **Submit**. Si lo envías antes del deploy, quedará en "No se ha podido obtener" y se corrige solo después.
6. Menú **URL inspection** *(Inspección de URLs)* → pega `https://byrongonzalez.com.co/` → **Request indexing** *(Solicitar indexación)*. Repite con `/servicios` y `/en`. También después del deploy.
7. Los datos de búsqueda (keywords, impresiones, clicks) empiezan a aparecer en 2–3 días.

---

## 7. Verificación final (~10 min)

1. **GTM funcionando**: instala la extensión "Tag Assistant Companion" o entra a **https://tagassistant.google.com** → conecta tu sitio → navega y verifica que se disparan `GA4 - Config` y, al enviar el formulario de prueba, `GA4 - generate_lead`.
2. **GA4 en vivo**: en Analytics → **Informes → Tiempo real**, entra a tu sitio desde el celular y mira si apareces.
3. **Formulario**: envíate un mensaje de prueba desde la página de contacto y confirma que llega a tu Gmail (revisa spam la primera vez).
4. **Datos estructurados**: pega `https://byrongonzalez.com.co/servicios` en **https://search.google.com/test/rich-results** — debe detectar FAQ y ProfessionalService.
5. **Redes**: pega la URL en **https://www.opengraph.xyz** para ver cómo se ve la tarjeta al compartir en LinkedIn/WhatsApp.

## Dónde ver tus métricas después

| Qué quieres saber | Dónde |
|---|---|
| Cuánta gente entra, de dónde, qué páginas ven | GA4 → Informes |
| Qué buscan en Google para encontrarte | Search Console → Rendimiento |
| Cómo navegan (grabaciones, mapas de calor, dónde hacen click) | Clarity → Recordings / Heatmaps |
| Velocidad real del sitio para tus visitantes | Vercel → Speed Insights |
| Cuántos te contactaron (formulario, WhatsApp, CV descargado) | GA4 → Informes → Interacción → Eventos |

---

## 8. Guía de lectura — cómo revisar cada herramienta en el día a día

### Microsoft Clarity (clarity.microsoft.com → tu proyecto)
- **Dashboard**: resumen de sesiones + señales de fricción automáticas: *Dead clicks* (clics que no hacen nada — botón roto o mal diseñado), *Rage clicks* (clics repetidos por frustración), *Excessive scrolling*, *Quick backs* (entra y se va enseguida).
- **Recordings**: grabaciones reales de sesiones — ves el mouse, el scroll, los clics de una persona real navegando tu sitio. La forma más rápida de detectar confusión de UX.
- **Heatmaps**: mapa de calor por página (filtra por URL, ej. `/servicios`) — dónde hace clic la gente y hasta dónde llega haciendo scroll.
- ⏳ Tarda ~2 horas en mostrar la primera grabación después de que alguien visite el sitio.

### Google Analytics 4 (analytics.google.com → tu propiedad)
- **Informes → Tiempo real**: quién está en el sitio ahora mismo (país, página, dispositivo). Funciona al instante — pruébalo entrando al sitio desde otro dispositivo.
- **Informes → Ciclo de vida → Adquisición**: de dónde viene la gente (Google, directo, LinkedIn, etc.).
- **Informes → Ciclo de vida → Interacción → Eventos**: aquí ves `generate_lead`, `file_download`, `click_whatsapp`, `click_linkedin`, `click_email` — cuántas veces pasó cada uno.
- **Informes → Ciclo de vida → Interacción → Páginas y pantallas**: qué páginas visitan más.
- **Recomendado**: Admin → Eventos → busca `generate_lead` → activa **"Marcar como evento clave"** (key event), así GA4 lo resalta como conversión, no como una visita más.
- ⏳ Todo excepto Tiempo real tarda 24-48h en poblarse (Google procesa por lotes).

### SEO — verificar lo implementado
- **Search Console → Rendimiento**: en unos días muestra qué palabras usa la gente en Google para encontrarte, impresiones y clics.
- **Search Console → Indexing → Pages**: confirma que Google indexó las 12 URLs (6 páginas × 2 idiomas).
- **Rich Results Test** (search.google.com/test/rich-results): pega `https://byrongonzalez.com.co/servicios` — debe detectar `FAQPage` y `ProfessionalService`.
- **Vista previa social** (opengraph.xyz): pega tu URL para ver la tarjeta que se muestra al compartir en LinkedIn/WhatsApp.
- **Hreflang manual**: `view-source:https://byrongonzalez.com.co/` → busca `hreflang` → deben aparecer 3 líneas (`es-CO`, `en`, `x-default`).
