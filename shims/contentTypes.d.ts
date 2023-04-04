import { ParsedContent } from "@nuxt/content/dist/runtime/types"

declare global {
  interface Window {
    __NUXT__: { state: RootState }
  }
}

export interface Post extends ParsedContent {
  slug?: string
  title: string
  excerpt?: string
  content: string
  publishedAt: string
  featuredImage?: string
  seoDescription?: string
  seoMetaImage?: string
}

export interface Page extends ParsedContent {
  slug?: string
  title: string
  subtitle?: string
  content: string
  featuredImage?: string
  seoDescription?: string
  seoMetaImage?: string
}
