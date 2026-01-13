import React from "react";
import s from './Blog.module.scss'
import { Posts } from "@/utils/types";

type BlogProps = {
    posts: Posts
};


const Blog: React.FC<BlogProps> = ({ posts }) => {
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