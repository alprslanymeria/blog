"use server";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function subscribeAction(prevState, queryData) {
    const rawFormData = {
        email: queryData.get('email')
    }

    try {
        await prisma.subscriber.create({
            data: {
                email: rawFormData.email,
                status: "ACTIVE",
            },
        })

        return "success";

    } catch (error) {
        return "failed";
    }
}
