const modules = import.meta.glob('./*.mdx', { eager: true })

export const articles = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.replace('./', '').replace('.mdx', ''),
    title: mod.frontmatter?.title ?? 'Sin título',
    date: mod.frontmatter?.date ?? '',
    description: mod.frontmatter?.description ?? '',
    tags: mod.frontmatter?.tags ?? [],
    Component: mod.default,
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getArticle(slug) {
  return articles.find(a => a.slug === slug) ?? null
}
