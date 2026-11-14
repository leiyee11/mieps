"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Activity } from "@/data/site";
import { formatDate, isUpcoming } from "@/lib/dates";
import { SampleLabel } from "@/components/ui";

export function ActivityBrowser({
  items,
  detailPrefix,
  archiveLabel = "Past activities",
}: {
  items: Activity[];
  detailPrefix: string;
  archiveLabel?: string;
}) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const filtered = useMemo(
    () => items.filter((item) => category === "All" || item.category === category),
    [items, category],
  );
  const upcoming = filtered
    .filter((item) => isUpcoming(item))
    .sort((a, b) => a.date.localeCompare(b.date));
  const archive = filtered
    .filter((item) => !isUpcoming(item))
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderCard = (item: Activity) => (
    <article className="activity-card" key={item.slug}>
      <div className="activity-card-top">
        <span className="activity-date">{formatDate(item.date)}</span>
        <SampleLabel>Sample listing</SampleLabel>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="activity-location">{item.category} · {item.location}</p>
      <Link className="arrow-link" href={`${detailPrefix}/${item.slug}`} style={{ marginTop: 16 }}>
        View details
      </Link>
    </article>
  );

  return (
    <>
      <div className="filter-row" aria-label="Filter activities by category">
        {categories.map((item) => (
          <button
            type="button"
            className="filter-button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        <div className="section-topline">
          <h2 className="list-heading">Upcoming</h2>
          <p className="list-count">{upcoming.length} {upcoming.length === 1 ? "listing" : "listings"}</p>
        </div>
        {upcoming.length ? <div className="activity-grid">{upcoming.map(renderCard)}</div> : <p className="empty-note empty-note-light">No upcoming listings in this category.</p>}

        <div className="activity-archive">
          <div className="section-topline">
            <h2 className="list-heading">{archiveLabel}</h2>
            <p className="list-count">{archive.length} {archive.length === 1 ? "listing" : "listings"}</p>
          </div>
          {archive.length ? <div className="activity-grid">{archive.map(renderCard)}</div> : <p className="empty-note empty-note-light">No archived listings in this category.</p>}
        </div>
      </div>
      <p className="research-disclaimer">Every displayed activity is mock data. Confirmed dates, registration details, and locations are not yet available.</p>
    </>
  );
}
