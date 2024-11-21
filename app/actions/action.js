"use server";

import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';

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



export async function createCommentAction(prevState ,queryData) {

    const cookieStore = await cookies()
    const cookieId = cookieStore.get('user-id')

    const rawFormData = {
        content: queryData.get('content'),
        avatar: queryData.get('selectedAvatar'),
        cookieId: "user-1732134772087",
        blogId: parseInt(queryData.get('blogId'), 10),
        parentCommentId: null,
    };

    try {
        // Yeni yorum oluştur
        await prisma.comment.create({
            data: {
                content: rawFormData.content, //+
                avatar: rawFormData.avatar, //+
                cookieId: rawFormData.cookieId, //+
                blogId: rawFormData.blogId, //+
                parentCommentId: rawFormData.parentCommentId,
                isDeleted: false,
                createdOn: new Date(),
                updatedOn: new Date(),
            },
        });

        return "comment success";
    } catch (error) {
        console.error("Error creating comment:", error);
        return "comment failed";
    }
}