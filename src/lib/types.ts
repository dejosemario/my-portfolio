import { links } from "./data";

// extracting the type of the links array
export type SectionName = (typeof links)[number]["name"]; 
