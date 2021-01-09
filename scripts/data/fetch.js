import { Promise } from "core-js"
import { clearRootBy, renderComponentByOrder } from "../core/core"
import { Preloader } from "../modules/Preloader"
import { getCookie } from "../utils/utils"

const SERVER = 'http://localhost/project/includes/get.php?'
export const getCategories = async () => {
    renderComponentByOrder(Preloader())
    return await fetch(`http://localhost/project/includes/get.php?page=categories`)
    .then(response => {
        if (response.status == 200) {
            clearRootBy('#preloader')
        } else new Error(response.statusText)

        return response.json()
    })
    .then(data => {
        return data.body
    })
    .catch(err => {
        console.log('Fetch Error :-S', err)
    })
}
export const getIdeas = async (id) => {
    renderComponentByOrder(Preloader())
    return await fetch(`http://localhost/project/includes/get.php?page=ideas&id=${id}`)
    .then(response => {
        if (response.status == 200) {
            clearRootBy('#preloader')
        } else new Error(response.statusText)
        
        return response.json()
    })
    .then(data => {
        return data.body
    })
    .catch(err => {
        console.log('Fetch Error :-S', err)
    })
}
export const getIdea = async (id) => {
    renderComponentByOrder(Preloader())
    return await fetch(`http://localhost/project/includes/get.php?page=idea&id=${id}`)
    .then(response => {
        if (response.status !== 200) {
            new Error(response.statusText)
        }
        if (response.status == 200){
           clearRootBy('#preloader')
        }
        return response.json()
    })
    .then(data => {
        return data.body
    })
    .catch(err => {
        console.log('Fetch Error :-S', err)
    })
}
export const getMyPosts = async () => {
    renderComponentByOrder(Preloader())
    return await fetch(`http://localhost/project/includes/get.php?page=ideas&userName=${getCookie('login')}`)
    .then(response => {
        if (response.status !== 200) {
            new Error(response.statusText)
        }
        if (response.status == 200){
           clearRootBy('#preloader')
        }
        return response.json()
    })
    .then(data => {
        return data.body
    })
    .catch(err => {
        console.log('Fetch Error :-S', err)
    })
}