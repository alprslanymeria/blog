"use client";

import React, { useState, useEffect } from "react";
import { getCookie } from "cookies-next/client";
import Form from 'next/form'
import { createCommentAction } from "@/app/actions/action";
import { useActionState } from 'react';

export default function MakeComment({ blogId }) {
    const avatars = [
        "/images/capsImages/1.jpg",
        "/images/capsImages/2.jpg",
        "/images/capsImages/3.jpg",
        "/images/capsImages/4.jpg",
        "/images/capsImages/5.jpg",
        "/images/capsImages/6.jpg",
        "/images/capsImages/7.jpg",
        "/images/capsImages/8.jpg",
    ];

    const [selectedAvatar, setSelectedAvatar] = useState('');

    const [message, formAction, isPending] = useActionState(createCommentAction, null);

    useEffect(() => {
        if (!isPending) {
            setSelectedAvatar('');
        }
    }, [isPending]);

    return (
        <div className="p-4 max-w-2xl mx-auto text-center">

            <Form action={formAction}>
                {/* Avatar seçimi */}
                <div className="mb-4">
                    <div className="flex justify-center gap-4 flex-wrap">
                        {avatars.map((avatar, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-blue-500' : ''}`}
                                onClick={() => setSelectedAvatar(avatar)}
                            >
                                <img
                                    src={avatar}
                                    alt={`Avatar ${index + 1}`}
                                    className="w-14 h-14 rounded-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Yorum kısmı */}
                <div className="mb-4">
                    <textarea
                        id="content"
                        name="content"
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Yorumunuzu buraya yazın..."
                    />
                </div>

                <input type="hidden" name="selectedAvatar" value={selectedAvatar} />
                <input type="hidden" name="blogId" value={blogId} />

                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Gönder
                </button>
            </Form>
        </div>
    );
}
