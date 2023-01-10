import LiveTimestapmp from "./LiveTimestapmp"
import ReadMoreButton from "./ReadMoreButton"

type Props = {
    article: Article
}

function Article({article}: Props) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col
    rounded-lg shadow-lg hover:scale-105 hover:shadow-xl
    hover:bg-slate-200 transition-all duration-200 ease-out">
        {article.image && (
            <img 
            src={article.image} 
            alt={article.title}  
            className="h-56 w-full rounded-t-lg shadow-md" />
        )}
        <div className="flex flex-1 flex-col dark:bg-siate-500">
            <div className="flex flex-1 flex-col p-5">
                <h2 className="font-bold font-serif">{article.title }</h2>
            <section className="mt-2 flex-1">
                <p className="text-xs line-clamp-6">{article.description}</p>
            </section>

            <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
                <p>{article.sources} - </p>
                <p><LiveTimestapmp time={article.published_at}/></p>
            </footer>

            </div>
            {/* Read more button */}
            < ReadMoreButton article={article}/>
            
        </div>
    </article>
  )
}

export default Article