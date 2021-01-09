const $root = document.querySelector('#root')
export const renderComponentByOrder = (components, afterRender, $whenInsert = null) => {
    if (Array.isArray(components)){
        components.forEach(value => {
            value.then(component => {
                if($whenInsert){
                    $root.querySelector($whenInsert).insertAdjacentHTML('beforeend', component)
                } else $root.insertAdjacentHTML('beforeend', component)
            })
        })
    } else {
        if ($whenInsert) {
            $root.querySelector($whenInsert).insertAdjacentHTML('beforeend', component)
        } else $root.insertAdjacentHTML('beforeend', components)
    }

    if (afterRender){
        afterRender()
    }
}
export const clearRootBy = ($el) => {
    $root.querySelector($el).remove()
}
export const fillRoot = (components, afterRender) => {
    $root.innerHTML = ''
    renderComponentByOrder(components, afterRender)
}