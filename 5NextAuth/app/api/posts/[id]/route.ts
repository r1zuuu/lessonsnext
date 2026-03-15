import { NextResponse } from "next/server";
import { Post } from "../../../types/index";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }>}) {
    try{
        const { id } = await params
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post: Post = await res.json();
        const response = post.title + ' ' + post.body
        return NextResponse.json(response)
    }
    catch(error)
    {
        return NextResponse.json(
            {error: 'Nie udalo sie pobrac postow'},
            {status: 500}
        )
    }


}