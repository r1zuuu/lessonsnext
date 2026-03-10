import { Post } from "../../types/index"

export default async function PostPage({ params }: { params: Promise<{ id: string }>}) {
    const { id } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post: Post = await res.json();
    if(!res.ok) {
        return <div>Post not found</div>
    }
    return (
    <div>
      <h1>Strona pojedynczego posta</h1>
      <p> {post.title}</p>
      <h2>{post.body}</h2>
    </div>
  );
}
