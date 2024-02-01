import type { CollectionEntry } from "astro:content";

// lol stupid typescript to convert a record type into array form for object.entries.
// https://stackoverflow.com/questions/60141960/typescript-key-value-relation-preserving-object-entries-type/60142095#60142095
type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];
//lol
type woah = CollectionEntry<"play">["data"]["heroImages"];

export function getFirst(obj: woah, callback: (arg: Entries<woah>) => void) {
  const entry = Object.entries(obj)[0];

  return callback(entry);
}
