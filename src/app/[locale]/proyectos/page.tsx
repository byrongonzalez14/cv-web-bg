import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCvData } from "@/content";
import { getWork } from "@/content/cases";
import { buildPageMetadata } from "@/lib/metadata";
import { ProjectsStage } from "@/components/work/ProjectsStage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "work", "/proyectos");
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "work" });
  const { projects } = getWork(locale);
  const { profile } = getCvData(locale);

  return (
    <>
      {/* The whole page is one pinned stage: title, projects and the closing question */}
      <ProjectsStage
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        scrollHint={t("scrollHint")}
        projects={projects}
        caseCta={t("viewCase")}
        siteCta={t("visitSite")}
        closing={{
          title: t("ctaBand.title"),
          text: t("ctaBand.text"),
          cta: t("ctaBand.cta"),
          href: profile.calendar,
        }}
      />
    </>
  );
}
