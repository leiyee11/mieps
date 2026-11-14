export type ResearchArea = {
  slug: string;
  title: string;
  short: string;
  overview: string;
  image: string;
  imageAlt: string;
  theme: string;
  objectives: string[];
  sampleNote: string;
};

export type Activity = {
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "speleology",
    title: "Speleology",
    short: "Reading the stories held within the underground world.",
    overview:
      "Speleology is the study and exploration of caves and karst landscapes, bringing together geology, hydrology, and careful field observation.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Aerial view of a rugged coastline and deep blue water",
    theme: "Karst · Caves · Subsurface",
    objectives: [
      "Document cave and karst environments through field observation.",
      "Explore the geological processes that shape underground landscapes.",
      "Support responsible understanding of sensitive subterranean systems.",
    ],
    sampleNote:
      "The subject overview is illustrative. MIEPS projects and publications have not been supplied.",
  },
  {
    slug: "mining-geology",
    title: "Mining Geology",
    short: "Understanding mineral systems and the landscapes they shape.",
    overview:
      "Mining geology examines the origin, distribution, and characteristics of mineral resources, and the geological context in which they occur.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Layered rock formations in an open geological landscape",
    theme: "Minerals · Earth materials · Field methods",
    objectives: [
      "Describe geological settings associated with mineral resources.",
      "Build understanding of earth materials through scientific field methods.",
      "Connect resource questions with responsible environmental awareness.",
    ],
    sampleNote:
      "The subject overview is illustrative. MIEPS projects and publications have not been supplied.",
  },
  {
    slug: "natural-disasters",
    title: "Natural Disasters",
    short: "Studying earth processes to strengthen public understanding.",
    overview:
      "This field considers geological hazards and the earth processes behind them, supporting education and informed preparedness.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Mountainous landscape viewed from above under a broad sky",
    theme: "Hazards · Earthquakes · Preparedness",
    objectives: [
      "Explain geological processes that can create natural hazards.",
      "Make earth-science knowledge accessible to learners and communities.",
      "Promote preparedness education without presenting real-time alerts.",
    ],
    sampleNote:
      "The subject overview is illustrative. MIEPS projects and publications have not been supplied.",
  },
  {
    slug: "resources-environment",
    title: "Resources and Environment",
    short: "Exploring the relationship between earth resources and ecosystems.",
    overview:
      "This area explores earth resources alongside the environmental systems and decisions connected to their use and stewardship.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A quiet mountain lake surrounded by forested terrain",
    theme: "Water · Land · Environmental systems",
    objectives: [
      "Understand connections between geological resources and environments.",
      "Encourage evidence-led learning about landscapes and natural systems.",
      "Bring environmental questions into earth-science education.",
    ],
    sampleNote:
      "The subject overview is illustrative. MIEPS projects and publications have not been supplied.",
  },
];

export const activities: Activity[] = [
  {
    slug: "field-methods-workshop",
    title: "Field Methods in Earth Science",
    category: "Workshop",
    date: "2027-03-20",
    location: "Sample location to be confirmed",
    description:
      "Demonstration listing for a hands-on introduction to observation, field notes, and earth-science mapping.",
  },
  {
    slug: "earth-science-open-lecture",
    title: "Earth Science: A Public Lecture",
    category: "Public lecture",
    date: "2027-05-12",
    location: "Venue to be confirmed",
    description:
      "Demonstration listing for a public introduction to the science of the changing Earth.",
  },
  {
    slug: "geology-learning-series",
    title: "Foundations of Geology",
    category: "Course",
    date: "2026-04-18",
    location: "Sample archive entry",
    description:
      "Sample past activity record. Replace with a verified program, date, and details before publication.",
  },
  {
    slug: "limestone-landscapes-field-day",
    title: "Limestone Landscapes Field Day",
    category: "Field trip",
    date: "2027-07-14",
    location: "Sample location to be confirmed",
    description:
      "Demonstration listing for a guided observation of rock formations and landforms. No field activity is currently confirmed.",
  },
  {
    slug: "environmental-earth-science-seminar",
    title: "Environmental Earth Science Seminar",
    category: "Seminar",
    date: "2027-09-01",
    location: "Venue to be confirmed",
    description:
      "Demonstration listing for an earth-science seminar. Topic, speakers, venue, and registration are not confirmed.",
  },
  {
    slug: "student-earth-science-opportunity",
    title: "Student Earth Science Opportunity",
    category: "Student opportunity",
    date: "2027-10-10",
    location: "Details to be confirmed",
    description:
      "Sample listing to show where student opportunities could be published. Eligibility and applications are not available.",
  },
];

export const conferences: Activity[] = [
  {
    slug: "earth-science-forum",
    title: "Earth Science Forum",
    category: "Conference",
    date: "2027-11-18",
    location: "Venue to be confirmed",
    description:
      "Demonstration conference listing. Program, speakers, abstract submission, and registration details are not yet available.",
  },
  {
    slug: "research-exchange",
    title: "Research Exchange on Earth Systems",
    category: "Conference archive",
    date: "2025-10-08",
    location: "Sample archive entry",
    description:
      "Sample archived conference record. Replace with verified proceedings and event details before publication.",
  },
];

export const newsItems = [
  {
    category: "Research",
    title: "Research updates will be shared here",
    date: "Sample content",
    description:
      "A home for institute announcements, field notes, and research stories once verified material is available.",
    href: "/research",
  },
  {
    category: "Learning",
    title: "Learning opportunities",
    date: "Sample content",
    description:
      "Courses, workshops, and public learning opportunities can be listed here with confirmed dates and registration details.",
    href: "/education",
  },
  {
    category: "Community",
    title: "Earthquake preparedness resources",
    date: "Educational resource",
    description:
      "Explore preparedness guidance from recognized public-safety organizations. This is not a real-time alert service.",
    href: "/earthquake-safety",
  },
];

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Education & Activities", href: "/education" },
  { label: "Conferences", href: "/conferences" },
  { label: "Registration", href: "/registration" },
  { label: "Earthquake Safety", href: "/earthquake-safety" },
  { label: "Contact", href: "/contact" },
];

export const homeImage =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90";
