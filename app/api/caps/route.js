import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// CapsImages tablosundan tüm verileri çeker
export async function GET(request) {
  
    try {

    const capsImages = await prisma.capsImage.findMany();

    return new Response(JSON.stringify(capsImages), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (error) {
    console.error('Error fetching CapsImages:', error);

    return new Response(
      JSON.stringify({ error: 'Unable to fetch CapsImages' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
