export type Coworking = {
    id: number;
    name: string;
    address: string;
    postal_code: string;
    city: string;
    website: string;
    latitude: number;
    longitude: number;
};

export type CoworkingDetailsType = Coworking & { type: 'random' | 'selected' }


type Size = {
    file?: string;
    width?: number;
    height?: number;
    filesize?: number;
    mime_type?: string;
    source_url?: string;
};

type MediaDetails = {
    width?: number;
    height?: number;
    file?: string;
    filesize?: number;
    sizes?: Record<string, Size>;
    image_meta?: Record<string, any>;
    original_image?: string;
};

type WPFeaturedMedia = {
    id: number;
    date?: string;
    slug?: string;
    type?: string;
    link?: string;
    title?: { rendered?: string };
    author?: number;
    featured_media?: number;
    caption?: { rendered?: string };
    alt_text?: string;
    media_type?: string;
    mime_type?: string;
    media_details?: MediaDetails;
    source_url?: string;
    _links?: Record<string, any>;
};

type Author = {
    id: number;
    name?: string;
    url?: string;
    description?: string;
    link?: string;
    slug?: string;
    avatar_urls?: Record<string, string>;
    yoast_head?: string;
    yoast_head_json?: Record<string, any>;
    _links?: Record<string, any>;
};

type Term = {
    id?: number;
    link?: string;
    name?: string;
    slug?: string;
    taxonomy?: string;
    yoast_head?: string;
    yoast_head_json?: Record<string, any>;
    _links?: Record<string, any>;
};

type WPEmbedded = {
    author?: Author[];
    "wp:featuredmedia"?: WPFeaturedMedia[];
    "wp:term"?: (Term[] | any)[];
    [key: string]: any;
};

type LinkObject = {
    href?: string;
    embeddable?: boolean;
    templated?: boolean;
    targetHints?: { allow?: string[] };
    [key: string]: any;
};

type Links = Record<string, LinkObject[]>;

type Post = {
    id: number;
    slug?: string;
    link?: string;
    title?: { rendered?: string };
    _links?: Links;
    _embedded?: WPEmbedded;
    [key: string]: any;
};

export type Posts = Post[];