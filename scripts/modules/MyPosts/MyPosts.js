import { ContentContainer } from "../Content/ContentContainer";

export const MyPosts = (data) => {
    //const needTime = Math.ceil(data.text.length / SPEED_READING)
    // return `
    //     ${ContentContainer(true, null, data)}
    // `
    let style = `
        display: block;
        text-decoration: none;
        border: 1px solid #fff;
        font-style: oblique;
        font-size: 40px;
        display: flex;
        width: 100%;
        background: #55595C;
        color: #fff;
        justify-content: center;
        align-items: center;
        font-family: cursive;
        padding: 20px 20px;
        height: calc(100vh - 120px);
        cursor: pointer;
    `
    return `
        <main class="container d-flex justify-content-between align-items-center">
            <a style="${style}" id="addPost">Add post</a>
            <a style="${style}" id="postsFromMe">My posts</a>
            <a style="${style}" id="likes">Likes</a>
        </main>
    `
} 