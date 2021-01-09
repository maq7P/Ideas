import { SPEED_READING } from "../../constants";
import { renderComponentByOrder } from "../../core/core";
import { getIdea } from "../../data/fetch";
import { ContentPage } from "./ContentPage";

export const ContentPageContainer = (id = '', data=null) => {
    const render = (data) => {
        const needTime = Math.ceil(data.text.length / SPEED_READING)
        renderComponentByOrder(ContentPage(data, needTime))
    }
    if(data){
        render(data)
        return
    }
    getIdea(id).then(data => {
        render(data)
    })
}