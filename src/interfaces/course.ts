export interface Medium {
    name: string,
    resource_type: string,
    resource_value: string,
    thumbnail_url?: string
}

export interface Checklist {
    color: string,
    icon: string,
    id: string,
    list_page_visibility: boolean,
    text: string
}

export interface CtaText {
    name: string,
    value: string
}

export interface Section {
    type: string,
    name: string,
    description: string,
    bg_color: string,
    order_idx: number,
    values: []
}

export interface Data {
    slug: string
    id: number
    title: string
    description: string
    media: Medium[]
    checklist: Checklist[]
    seo: []
    cta_text: CtaText
    sections: Section[]
}
