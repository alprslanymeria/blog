import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
    
    const url = new URL(request.url);
    const postId = url.searchParams.get("id");

    try {
        
        const blogPostData = await prisma.blogPost.findFirst({
            where: {
                id: parseInt(postId),
            },
            include: {
                category: true,
                tags: true,
            },
        });

        if (!blogPostData) {
            return new Response('Blog post not found', { status: 404 });
        }

        return new Response(JSON.stringify(blogPostData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response('Error fetching blog post data', { status: 500 });
    }
}
