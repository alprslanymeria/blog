import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
    try {
        const url = new URL(request.url);
        const blogId = url.searchParams.get('blogId');

        if (!blogId) {
            return new Response('blogId is required', { status: 400 });
        }

        const comments = await prisma.comment.findMany({
            where: {
                blogId: parseInt(blogId),
                isDeleted: false,
            },
            include: {
                user: true,
                replies: true,
            },
        });

        if (!comments.length) {
            return new Response('No comments found for the specified blog', { status: 404 });
        }

        return new Response(JSON.stringify(comments), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response('Error fetching comments', { status: 500 });
    }
}
