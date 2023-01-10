type Pagination = {
    count: Int
    limit: Int
    offset: Int
    total: Int

}

type Article = {
    author: string | null
    category: string
    country: string
    description: string
    image: string | null
    languages: string 
    published_at: string
    sources: string
    title: string
    url: string
}


type NewsResponse = {
    pagination: Pagination
    data: Article[]
}

type Category = 
    "general"
    "business"
    "entertainment"
    "health"
    "science"
    "sports"
    "technology";
