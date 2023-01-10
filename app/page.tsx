import { categories } from "../constants";
import fetchNews from "../Lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json"

async function Homepage() {
  // fetch news 

  //use response.json || await fetchNews(categories.join(",")) to save on API calls
  const news: NewsResponse =  await fetchNews(categories.join(","));
  //set timeout 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000))
  //console.log(news);
  return (
    <div>
      {/* NewsList */}
      < NewsList news={news}/>
    </div>
  )
}

export default Homepage