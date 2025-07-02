import type { CollectionEntry } from "astro:content";


type woah = NonNullable<CollectionEntry<"play">["data"]["heroImages"]>

export function getFirst(obj: woah | undefined, callback: (arg: [string,woah[keyof woah]]) => void) {
  if (!obj) throw 'undefined obj'
  const entry = Object.entries(obj)[0];

  return callback(entry);
}
