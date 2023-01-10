import { gql } from "graphql-request";
import { json } from "stream/consumers";
import sortNewsByImage from "./sortNewsByImage";
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //Graph QL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // fetch with next.js 13 caching
  const res = await fetch(
    "https://impfondo.stepzen.net/api/harping-kiwi/__graphql",
    {
      method: "post",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log("Loading data from API for category >>>", category, keywords);
  const newsResponse = await res.json();
  //sort by images present vs. not present
  const news = sortNewsByImage(newsResponse.data.myQuery);
  //return res
  return news;
};

export default fetchNews;
//stepzen import curl "http://api.mediastack.com/v1/news?access_key=50e6b3548e295c30be5794721ad80bb5&keywords=tennis&countries=us,gb,de"
