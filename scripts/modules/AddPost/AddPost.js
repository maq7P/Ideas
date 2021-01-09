export const AddPost = (data) => {
    console.log(data);
    let options = '';
    data.forEach(category => {
        options += `<option>${category.title}</option>`
    });
    return `
    <main
        class="container"
    >
        <h1 class="text-center mb-5">You can share with your ideas!</h1>
        <div class="d-flex justify-content-center align-items-center">
            <form method="POST" action="./includes/addPost.php">
                <div class="mb-3">
                    <label for="title">Title</label>
                    <input 
                        name="title"
                        required
                        id="title" type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="mb-3">
                    <label for="text">Describe your ideas or thoughts</label>
                    <textarea 
                        name="text"
                        required
                        style="width: 500px;"
                        class="form-control" aria-label="With textarea" id="text"></textarea>
                </div>
                <div class="mb-3">
                    <label for="option">Choose category</label>
                    <select class="form-control" name="option">
                        ${options}
                    </select>
                </div>
                <button name="add_post" class="w-100 btn btn-lg btn-dark" type="submit">Share</button>
            </form>
        </div>
    </main>
    `
} 