import { Post } from "../types"
export async function generateStaticParams() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then(res => res.json());
    return posts.map((post: Post) => ({
        id: post.id.toString()
    }))
}
export default async function Home(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Post[] = await res.json();
    return(
        <ul className="grid grid-cols-4 gap-2 p-4">
            {posts.map(post => (
                <li className="border-4 rounded-xs border-gray-300 p-4" key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}


//"getStaticProps" is not supported in app/page.tsx. Please move this function to a page in the "pages" directory, or remove it from this file.