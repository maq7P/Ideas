import { getCategories } from "../../data/fetch"

const { renderComponentByOrder } = require("../../core/core")
const { AddPost } = require("./AddPost")

export const AddPostContainer = () => {
    getCategories().then(data => {
        renderComponentByOrder(AddPost(data))
    })
}