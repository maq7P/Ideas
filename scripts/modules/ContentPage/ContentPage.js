export const ContentPage = ({
        title, text, userName, category
    }, needTime) => {
    return `
        <main class="container mt-5" 
            style="
                max-width: 765px;
                word-wrap: break-word;
            ">
            <h1 class="text-center">${title}</h1>
            <button type="button" class="mb-3 btn btn-dark">
                written by ${userName}
            </button>
            <button type="button" class="mb-3 btn btn-secondary">
                category ${category}
            </button>
            <p>${text}</p>
        </main>
    `
} 