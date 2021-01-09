import { clearRootBy, renderComponentByOrder } from "../../core/core";
import { getMyPosts } from "../../data/fetch";
import { AddPostContainer } from "../AddPost/AddPostContainer";
import { ContentContainer } from "../Content/ContentContainer";
import { WaitBlock } from "../Wait/WaitBlock";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = () => {
    getMyPosts().then(data => {
        renderComponentByOrder(MyPosts(data), () => {
            const addPost = document.getElementById('addPost')
            const myPosts = document.getElementById('postsFromMe')
            const likes = document.getElementById('likes')
            addPost.addEventListener('click', (e) => {
                e.preventDefault()
                clearRootBy('main')
                AddPostContainer()
            })
            myPosts.addEventListener('click', (e) => {
                e.preventDefault()
                clearRootBy('main')
                ContentContainer(true, null, data)
            })
            likes.addEventListener('click', (e) => {
                e.preventDefault()
                clearRootBy('main')
                WaitBlock()
            })
        })
    })
}