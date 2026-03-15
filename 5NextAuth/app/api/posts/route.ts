import { NextResponse } from "next/server";
import { Post } from "../../types/index";

export async function GET() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts: Post[] = await res.json();

        return NextResponse.json(posts)
    }
    catch(error){
        return NextResponse.json(
        {error: 'Nie udalo sie pobrac postow'},
        {status: 500}
    )
    }
}
export async function POST(request: Request) {
    try{
        const body = await request.json()
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: body.title,
                body: body.body,
                userId: body.userId || 1 

            })
        })
            const post: Post = await res.json();
            return NextResponse.json(post, { status: 201 })

        }
        
        catch(error){
            return NextResponse.json(
            {error: 'Nie udalo sie wstawic postu'},
            {status: 500}
            )
        }}