import { SPEED_READING } from "../../constants";
import { clearRootBy, renderComponentByOrder } from "../../core/core";
import { getIdeas } from "../../data/fetch";
import { ContentPageContainer } from "../ContentPage/ContentPageContainer";
import { Content } from "./Content";
export const ContentContainer = (auth, id='', data=null) => {
    if(auth){
        const generateCarts = (data) => {
            let carts = ''
            data.forEach(({
                title,
                text,
                id
            }) => {
                const needTime = Math.ceil(text.length / SPEED_READING)
                let showText = text
                if (text.length > 300) {
                    showText = text.slice(0, 300) + '...'
                }
                carts += `
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow" style="height: 470px;position: relative;">
                            <div 
                                style="
                                    font-style: oblique;
                                    font-size: 40px;
                                    height: 225px;
                                    display: flex;
                                    background: #55595C;
                                    color: #fff;
                                    justify-content: center;
                                    align-items: center;
                                    font-family: cursive;"

                                >${title}</div>
                            <div class="card-body">
                            <p class="card-text">${showText}</p>
                            <div 
                                style="position: absolute; bottom: 1rem;right: 1rem;left: 1rem;"
                                class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" id="view" data-id="${id}">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Add</button>
                                </div>
                                <small class="text-muted">${needTime} mins</small>
                            </div>
                            </div>
                        </div>
                    </div>
                `
            });
            return carts
        }

        if(data){
            //clearRootBy('main')
            renderComponentByOrder(Content(auth, generateCarts(data)))
        } else {
            getIdeas(id).then(data => {
                renderComponentByOrder(Content(auth, generateCarts(data)), () => {
                    const views = document.querySelectorAll('#view')
                    views.forEach(view => {
                        view.addEventListener('click', () => {
                            clearRootBy('main')
                            ContentPageContainer(view.getAttribute('data-id'))
                        })
                    })
                })
            })
        }
    } else {
        renderComponentByOrder(Content(auth), () => {
            const headerHeight = +document.querySelector('header').clientHeight
            document.querySelector('main').style.cssText = `
            height: calc(100vh - ${headerHeight}px);
            background-image: url('https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/bg-masthead.jpg')
        `
        })
    }
}