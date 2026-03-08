import { Post } from "../types"

export default async function Home(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Post[] = await res.json();
    return(
        <ul className="flex flex-col gap-2 columns-2">
            {posts.map(post => (
                <li className="border-4 rounded-2xl border-gray-300" key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}


//"getStaticProps" is not supported in app/page.tsx. Please move this function to a page in the "pages" directory, or remove it from this file.