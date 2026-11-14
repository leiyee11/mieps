import type { MetadataRoute } from "next";
import { researchAreas, activities, conferences } from "@/data/site";

const baseUrl = "https://mieps-edu.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/research",
    "/education",
    "/conferences",
    "/registration",
    "/earthquake-safety",
    "/contact",
    "/privacy",
  ];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: "monthly" as const, priority: route ? 0.7 : 1 })),
    ...researchAreas.map((area) => ({ url: `${baseUrl}/research/${area.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...activities.map((activity) => ({ url: `${baseUrl}/activities/${activity.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
    ...conferences.map((event) => ({ url: `${baseUrl}/conferences/${event.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
