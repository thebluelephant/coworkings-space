'use client'

import React, { useEffect, useState, startTransition } from "react";
import s from './Blog.module.scss'
import { Posts } from "@/utils/types";

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<Posts>([])
    const getPosts = async () => {
        const locale =
            typeof navigator !== "undefined"
                ? navigator.language.slice(0, 2)
                : "en";

        const res = await fetch(`https://blog.coworkings.space/wp-json/wp/v2/posts?language=${locale}&_embed&_fields=id,slug,title,link,_links,_embedded&per_page=3`);
        const data: Posts = await res.json();
        if (data.length) {
            startTransition(() => setPosts(data))
        }
    }

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div className={s.blog}>
            <div className={s.chip}>📖 Le Blog</div>
            <h2>Derniers articles</h2>
            <div className={s.blogPosts}>
                {
                    posts.map((post) =>
                        <div className={s.postCard} key={post.id}>
                            <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="" />
                            <div className={s.content}>
                                <h4>{post.title?.rendered}</h4>
                                <a href={post.link}>Lire →</a>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    );
};



export default Blog;