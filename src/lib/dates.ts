import type { Activity } from "@/data/site";

export function isUpcoming(item: Activity, now = new Date()) {
  const date = new Date(`${item.date}T23:59:59`);
  return date.getTime() >= now.getTime();
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}
