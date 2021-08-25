export const findById = (id, articles) => {
    return articles.find(art => art.id === id)
}