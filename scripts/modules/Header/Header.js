import { getCookie } from "../../utils/utils";

export const Header = (auth = false, navbarBlock = {}) => {
    if (auth) {
        return `
            <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-1 bg-white border-bottom shadow-sm">
                <a class="h5 my-0 me-md-auto fw-normal" 
                    href="#"
                    style="
                        border: 1px solid black;
                        border-radius: 50%;
                        overflow: hidden;
                    ">
                    <img 
                        style="width: 50px;height: 50px;"
                        src="https://st2.depositphotos.com/1674016/7512/v/600/depositphotos_75125685-stock-illustration-feather-vector-logo.jpg">
                
                </a>
                <nav class="my-2 my-md-0 me-md-3">
                    ${navbarBlock}
                </nav>
                <div>
                <a class="btn btn-dark" href="./includes/exit.php" id="logut">Log Out</a>
                </div>
            </header>
                `
    } else {
        return `
            <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-1 bg-white border-bottom shadow-sm">
                <a class="h5 my-0 me-md-auto fw-normal" 
                    href="#"
                    style="
                        border: 1px solid black;
                        border-radius: 50%;
                        overflow: hidden;
                    ">
                    <img 
                        style="width: 50px;height: 50px;"
                        src="https://st2.depositphotos.com/1674016/7512/v/600/depositphotos_75125685-stock-illustration-feather-vector-logo.jpg">
                </a>
                <nav class="my-2 my-md-0 me-md-3">
                    <a class="p-2 text-dark" href="#">About</a>
                    <a class="p-2 text-dark" href="#">Contacts</a>
                    <a class="p-2 text-dark" href="#">Support</a>
                </nav>
                    <a class="btn btn-outline-dark" href="singup.php" style="margin-right: 5px" id="singup">Sign up</a>
                    <a class="btn btn-dark" href="login.php" id="login">Log in</a>
            </header>
        `
    }
}
export default Header