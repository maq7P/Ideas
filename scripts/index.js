const { ContentContainer } = require("./modules/Content/ContentContainer")
const { HeaderContainer } = require("./modules/Header/HeaderContainer")

window.addEventListener('DOMContentLoaded', () => {
    if ((location.href === 'http://localhost/project/')
        || location.href === 'http://localhost/project/index.php') {
        HeaderContainer(false)
        ContentContainer(false)
    }
    if (location.href === 'http://localhost/project/home.php') {
        HeaderContainer(true)
        ContentContainer(true)
    }
})
