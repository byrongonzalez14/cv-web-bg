import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "privacy", "/privacidad");
}

const CONTENT = {
  es: [
    {
      title: "1. Responsable del tratamiento",
      body: "Este sitio (byrongonzalez.com.co) es operado por Byron González, con domicilio en Cali, Colombia. Para cualquier consulta sobre tus datos puedes escribir a byrongonzalezing@gmail.com.",
    },
    {
      title: "2. Datos que se recogen",
      body: "Formulario de contacto: nombre, correo electrónico, empresa (opcional) y el mensaje que envíes. Estos datos se usan exclusivamente para responder tu solicitud y no se comparten con terceros ni se usan para envíos comerciales no solicitados. Analítica: el sitio usa Google Analytics 4, Google Tag Manager, Microsoft Clarity y Vercel Analytics para entender de forma agregada cómo se usa el sitio (páginas visitadas, país, tipo de dispositivo, interacciones). Estas herramientas pueden usar cookies o identificadores similares.",
    },
    {
      title: "3. Finalidad y base legal",
      body: "El tratamiento se realiza conforme a la Ley 1581 de 2012 (Colombia) y normativa aplicable. Las finalidades son: responder solicitudes de contacto, medir y mejorar el funcionamiento del sitio, y entender la audiencia de forma agregada y anónima.",
    },
    {
      title: "4. Cookies y control",
      body: "Puedes rechazar las cookies de analítica desde el aviso de consentimiento del sitio, configurar tu navegador para bloquearlas, o usar las herramientas de exclusión de Google (tools.google.com/dlpage/gaoptout). Vercel Analytics no usa cookies.",
    },
    {
      title: "5. Conservación",
      body: "Los mensajes de contacto se conservan solo el tiempo necesario para gestionar la conversación. Los datos de analítica se conservan según los plazos estándar de cada herramienta (Google Analytics: 14 meses).",
    },
    {
      title: "6. Tus derechos",
      body: "Puedes solicitar el acceso, corrección o eliminación de tus datos personales en cualquier momento escribiendo a byrongonzalezing@gmail.com.",
    },
  ],
  en: [
    {
      title: "1. Data controller",
      body: "This site (byrongonzalez.com.co) is operated by Byron González, based in Cali, Colombia. For any questions about your data you can write to byrongonzalezing@gmail.com.",
    },
    {
      title: "2. Data collected",
      body: "Contact form: name, email, company (optional), and the message you send. This data is used exclusively to respond to your request and is not shared with third parties or used for unsolicited commercial messages. Analytics: the site uses Google Analytics 4, Google Tag Manager, Microsoft Clarity, and Vercel Analytics to understand in aggregate how the site is used (pages visited, country, device type, interactions). These tools may use cookies or similar identifiers.",
    },
    {
      title: "3. Purpose and legal basis",
      body: "Data is processed in accordance with Colombian Law 1581 of 2012 and applicable regulations. The purposes are: responding to contact requests, measuring and improving how the site works, and understanding the audience in an aggregated, anonymous way.",
    },
    {
      title: "4. Cookies and control",
      body: "You can reject analytics cookies from the site's consent notice, configure your browser to block them, or use Google's opt-out tools (tools.google.com/dlpage/gaoptout). Vercel Analytics does not use cookies.",
    },
    {
      title: "5. Retention",
      body: "Contact messages are kept only as long as needed to handle the conversation. Analytics data is retained according to each tool's standard periods (Google Analytics: 14 months).",
    },
    {
      title: "6. Your rights",
      body: "You can request access, correction, or deletion of your personal data at any time by writing to byrongonzalezing@gmail.com.",
    },
  ],
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "privacy" });
  const sections = CONTENT[locale === "en" ? "en" : "es"];

  return (
    <>
      <PageHeader eyebrow="// legal" title={t("title")} />
      <section className="mx-auto max-w-3xl px-4 pb-24 md:px-6 md:pb-32">
        <p className="font-mono text-xs text-muted">
          {t("updated")}: 2026-07-04
        </p>
        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-lg font-semibold">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
