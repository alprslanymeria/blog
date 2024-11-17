import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Belirli category e ait verileri çeker
export async function GET(request) {

    const url = new URL(request.url)
    const category = url.searchParams.get("category")

    try {
        
        const categoryData = await prisma.category.findFirst({
          where: {
            name: category,
          },
          include: {
            blogPosts: true,
          },
        });
    
        if (!categoryData) {
          return new Response('Category not found', { status: 404 });
        }
    
        const postCount = categoryData.blogPosts.length;

        return new Response(JSON.stringify({categoryData,postCount}), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response('Error fetching category data', { status: 500 });
      }
}