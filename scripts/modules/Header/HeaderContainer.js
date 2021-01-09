import { clearRootBy, renderComponentByOrder } from "../../core/core";
import { getCategories } from "../../data/fetch";
import { ContentContainer } from "../Content/ContentContainer";
import { MyPostsContainer } from "../MyPosts/MyPostsContainer";
import Header from "./Header";
export const HeaderContainer = (auth) => {
    if (auth) {
        getCategories().then(data => {
            let navbarBlock = '';
            data.forEach(({
                title
            }, id) => {
                navbarBlock += `<a class="p-2 text-dark" href="#" 
                style="text-decoration: none;"
                id="navlink" 
                data-id="${id+1}">${title}</a>`
            });
            
            navbarBlock += `<a class="p-2 text-dark" href="#" 
                style="text-decoration: none;"
                id="myPosts"
            >My posts</a>`
            renderComponentByOrder(Header(auth, navbarBlock), () => {
                const myPost = document.getElementById('myPosts')
                const navbar = document.querySelectorAll('#navlink')
                navbar.forEach(link => {
                    link.addEventListener('click', e => {
                        navbar.forEach(l => {
                            l.style.textDecoration = 'none'
                        })
                        myPost.style.textDecoration = 'none'
                        link.style.textDecoration = 'underline'
                        e.preventDefault()
                        console.log(link.getAttribute('data-id'));

                        clearRootBy('main')
                        ContentContainer(true, link.getAttribute('data-id'))
                    })
                })
                myPost.addEventListener('click', e => {
                    e.preventDefault()
                    navbar.forEach(l => {
                        l.style.textDecoration = 'none'
                    })
                    myPost.style.textDecoration = 'underline'
                    clearRootBy('main')
                    MyPostsContainer()
                })
            })
        })
    } else {
        renderComponentByOrder(Header(auth))
    }
    
}