import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {

        const categoriesWithBlogs = await prisma.category.findMany({
            include: {
                blogPosts: {
                    include: {
                        tags: {
                            include: {
                                tag: true,
                            },
                        },
                    },
                },
            },
        });

        if (!categoriesWithBlogs.length) {
            return new Response('No categories or blogs found', { status: 404 });
        }

        return new Response(JSON.stringify(categoriesWithBlogs), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response('Error fetching categories and blogs', { status: 500 });
    }
}
