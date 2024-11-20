// "use client";

// import React, { useState } from "react";
// import { getCookie } from "cookies-next";
// import Form from "next/form";
// import { createCommentAction } from "@/app/actions/action";
// import { useActionState } from 'react';


// export default function MakeComment({blogId}) {
//     const avatars = [
//         "/images/capsImages/1.jpg",
//         "/images/capsImages/2.jpg",
//         "/images/capsImages/3.jpg",
//         "/images/capsImages/4.jpg",
//         "/images/capsImages/5.jpg",
//     ];

//     const [selectedAvatar, setSelectedAvatar] = useState(null);

//     // Cookie bilgisi alınır
//     const cookieId = getCookie("user-id");

//     const [message, formAction, isPending] = useActionState(createCommentAction, null);
//     const updateFormAction = formAction.bind(null, {blogId, cookieId, selectedAvatar})

//     return (
//         <div className="p-4 max-w-2xl mx-auto text-center">
//             <h2 className="text-2xl font-semibold mb-4">Yorum Yap</h2>

//             <Form action={updateFormAction}>
//                 <div className="mb-4">
//                     <label className="block text-lg font-medium mb-2">
//                         Bir avatar seçin:
//                     </label>
//                     <div className="flex justify-center gap-4">
//                         {avatars.map((avatar, index) => (
//                             <div
//                                 key={index}
//                                 className={`cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-blue-500' : ''}`}
//                                 onClick={() => setSelectedAvatar(avatar)}
//                             >
//                                 <img
//                                     src={avatar}
//                                     alt={`Avatar ${index + 1}`}
//                                     className="w-14 h-14 rounded-full"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="content" className="block text-lg font-medium mb-2">
//                         Yorumunuz
//                     </label>
//                     <textarea
//                         id="content"
//                         name="content"
//                         rows="4"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         placeholder="Yorumunuzu buraya yazın..."
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                 >
//                     Gönder
//                 </button>
//             </Form>
//         </div>
//     );
// }


"use client";

import React, { useState } from "react";
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
    ];

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    // Cookie bilgisi alınır
    const cookieId = getCookie('user-id');

    const [message, formAction, isPending] = useActionState(createCommentAction, null);

    console.log(blogId)
    console.log(cookieId)
    console.log(selectedAvatar)



    return (
        <div className="p-4 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Yorum Yap</h2>


            <Form action={formAction}>
                {/* Avatar seçimi */}
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">
                        Bir avatar seçin:
                    </label>
                    <div className="flex justify-center gap-4">
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
                    <label htmlFor="content" className="block text-lg font-medium mb-2">
                        Yorumunuz
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Yorumunuzu buraya yazın..."
                    />
                </div>

                {/* Hidden input'lar */}
                {/* <input type="hidden" name="cookieId" value={cookieId} /> */}
                {/* <input type="hidden" name="selectedAvatar" value={selectedAvatar} /> */}
                {/* <input
                    type="hidden"
                    value={selectedAvatar || ""}
                    onChange={(e) => setSelectedAvatar(e.target.value)}
                /> */}

                <input type="hidden" name="blogId" value={blogId} />

                {/* Gönder butonu */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Gönder
                </button>
            </Form>
        </div>
    );
}
