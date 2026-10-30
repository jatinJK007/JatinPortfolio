export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  tech: string;
  url?: string;
  linkText?: string;
  details?: string;
  highlightTag?: string;
  colorScheme?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  result: string;
  tag: string;
  context: string;
}

export interface NoteItem {
  id: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  snippet?: string;
}

export interface NumberMetric {
  value: string;
  unit: string;
  label: string;
}
