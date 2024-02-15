declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"play": {
"3d-images/index.mdx": {
	id: "3d-images/index.mdx";
  slug: "3d-images";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"48hr-repack/index.mdx": {
	id: "48hr-repack/index.mdx";
  slug: "48hr-repack";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"comissions/index.mdx": {
	id: "comissions/index.mdx";
  slug: "comissions";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"cool-roofs/index.mdx": {
	id: "cool-roofs/index.mdx";
  slug: "cool-roofs";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"ess/index.mdx": {
	id: "ess/index.mdx";
  slug: "ess";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"frogfest2022/index.mdx": {
	id: "frogfest2022/index.mdx";
  slug: "frogfest2022";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"frogfest2023/index.mdx": {
	id: "frogfest2023/index.mdx";
  slug: "frogfest2023";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"mikunation/index.mdx": {
	id: "mikunation/index.mdx";
  slug: "mikunation";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"saturn-font/index.mdx": {
	id: "saturn-font/index.mdx";
  slug: "saturn-font";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"tamagachi/index.mdx": {
	id: "tamagachi/index.mdx";
  slug: "tamagachi";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"templat/index.mdx": {
	id: "templat/index.mdx";
  slug: "templat";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"true-love/index.mdx": {
	id: "true-love/index.mdx";
  slug: "true-love";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
"wstofedn/index.mdx": {
	id: "wstofedn/index.mdx";
  slug: "wstofedn";
  body: string;
  collection: "play";
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] };
};
"work": {
"atl-wayfinding/index.mdx": {
	id: "atl-wayfinding/index.mdx";
  slug: "atl-wayfinding";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"drawaudiotoy/index.mdx": {
	id: "drawaudiotoy/index.mdx";
  slug: "drawaudiotoy";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"futureofwork/index.mdx": {
	id: "futureofwork/index.mdx";
  slug: "futureofwork";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"loopie-laundry/index.mdx": {
	id: "loopie-laundry/index.mdx";
  slug: "loopie-laundry";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
"tamagatchi/index.mdx": {
	id: "tamagatchi/index.mdx";
  slug: "tamagatchi";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
