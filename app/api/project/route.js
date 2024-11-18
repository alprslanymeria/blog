import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Projeleri ve ona ait tüm bilgileri verileri çeker
export async function GET(request) {

    const projects = await prisma.project.findMany({
        include: {
          images: true,
          technologies: {
            include: {
              technology: true,
            },
          },
          links: true,
        },
      });

      return new Response(JSON.stringify(projects), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
}