export const Content = (user = null, carts) => {
    if (!user) {
        return `
        <main>
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <h1 
                        class="mx-auto my-0 
                        text-uppercase"
                        style="
                            color: black;
                            font-weight: 700;
                            font-size: 84px;
                            "
                    >Ideas</h1>
                    <h2 
                        class="text mx-auto mt-2 mb-5">
                        Get a new ideas and share your own
                    </h2>
                    <a class="btn btn-dark" href="./login.php">Get Started</a>
                </div>
            </div>
        </main>
    `
    } else {
        return `
            <main>
                <div class="album py-5 bg-light"
                    style="height: 100vh;">
                    <div class="container">
                        <div class="row">
                            ${carts ? carts : '<h2>По этой категории еще ничего не опубликовано</h2>'}
                        </div>
                    </div>
                </div>
            </main>
        `
    }   
}