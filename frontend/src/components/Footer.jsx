import react from 'react';
// import '../styles/Footer.css';

function Footer() {
    return (
        <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-auto flex justify-between items-start px-4 md:px-0">

                {/* <!-- Left Section: Carbon Footer --> */}
                <div>
                    <h3 class="text-2xl font-bold">CARBON</h3>
                    <p class="mt-2 text-gray-300 max-w-sm">
                        We are dedicated to providing innovative solutions for reducing carbon emissions and promoting sustainability. Join us in our mission to create a greener future.
                    </p>

                    <div class="flex items-center mt-4">
                        {/* <!-- Phone Contact --> */}
                        <div class="flex items-center space-x-2">
                            <span class="bg-teal-600 text-white p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884a9 9 0 0115.84 7.6l-1.39-.765a2 2 0 00-2.196-.08l-1.668.939a2 2 0 01-2.457-.326l-.585-.585a2 2 0 01-.326-2.457l.939-1.668a2 2 0 00-.08-2.196l-.765-1.39a9 9 0 01-7.6 15.84l-.486-.276a2 2 0 01-2.196-.08L2.003 5.884z" />
                                </svg>
                            </span>
                            <div>
                                <p class="text-gray-400">Have a question?</p>
                                <p class="font-semibold">666-36-29</p>
                            </div>
                        </div>

                        {/* <!-- Email Contact --> */}
                        <div class="flex items-center space-x-2 ml-6">
                            <span class="bg-teal-600 text-white p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4z" />
                                </svg>
                            </span>
                            <div>
                                <p class="text-gray-400">Contact us at</p>
                                <p class="font-semibold">carbon1234@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Right Section: Query and Socials --> */}
                <div class="w-full max-w-md">
                    <h3 class="text-xl font-bold">Query</h3>
                    <p class="text-gray-400 mt-1">Future details</p>
                    <div class="flex mt-4">
                        <input type="text" placeholder="Enter your Query" class="bg-gray-800 p-3 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
                        <button class="bg-teal-600 p-3 rounded-r-lg text-white hover:bg-teal-500">Submit</button>
                    </div>
                    {/* <!-- Social Icons --> */}
                    <div class="flex space-x-4 mt-6">
                        <a href="#" class="bg-teal-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="white">
                                <path d="M22.675 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.588l-.467 3.621h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="#" class="bg-teal-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="white">
                                <path d="M22.23 5.924c-.805.355-1.675.593-2.587.701a4.514 4.514 0 001.984-2.497 9.032 9.032 0 01-2.862 1.091 4.505 4.505 0 00-7.684 4.107A12.798 12.798 0 012.228 4.299a4.505 4.505 0 001.396 6.017A4.476 4.476 0 011.8 9.578v.057a4.505 4.505 0 003.614 4.417 4.485 4.485 0 01-2.034.078 4.505 4.505 0 004.206 3.13A9.042 9.042 0 010 19.549a12.774 12.774 0 006.917 2.027c8.3 0 12.84-6.873 12.84-12.84 0-.195-.005-.39-.014-.583a9.176 9.176 0 002.256-2.34" />
                            </svg>
                        </a>
                        <a href="#" class="bg-teal-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="white">
                                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 22.212C6.308 22.212 1.788 17.692 1.788 12 1.788 6.308 6.308 1.788 12 1.788c5.692 0 10.212 4.52 10.212 10.212 0 5.692-4.52 10.212-10.212 10.212z" />
                                <path d="M12 5.753c-3.45 0-6.247 2.797-6.247 6.247 0 3.45 2.797 6.247 6.247 6.247 3.45 0 6.247-2.797 6.247-6.247 0-3.45-2.797-6.247-6.247-6.247zm0 11.009a4.764 4.764 0 01-4.762-4.762 4.764 4.764 0 014.762-4.762 4.764 4.764 0 014.762 4.762c0 2.624-2.138 4.762-4.762 4.762z" />
                            </svg>
                        </a>
                        <a href="#" class="bg-teal-600 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="white">
                                <path d="M24 4.557a9.965 9.965 0 01-2.828.775 4.928 4.928 0 002.164-2.723 9.946 9.946 0 01-3.127 1.195A4.918 4.918 0 0016.7 3c-2.733 0-4.946 2.213-4.946 4.943 0 .388.043.765.127 1.13C7.729 8.928 4.1 7.13 1.67 4.149a4.9 4.9 0 00-.667 2.485c0 1.713.87 3.23 2.19 4.12a4.935 4.935 0 01-2.24-.618v.062a4.947 4.947 0 003.967 4.845 4.932 4.932 0 01-2.237.085A4.948 4.948 0 007.73 19.58a9.867 9.867 0 01-6.102 2.107c-.395 0-.786-.023-1.174-.068a13.925 13.925 0 007.548 2.213c9.054 0 14.007-7.507 14.007-14.008 0-.213-.005-.426-.014-.638A10.005 10.005 0 0024 4.557z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Bottom Section: Additional Links --> */}
            <div class="mt-12 border-t border-gray-700 pt-4">
                <div class="container mx-auto px-4 md:px-0">
                    <div class="flex justify-between items-center">
                        <div class="text-gray-400 flex flex-wrap space-x-6 text-sm">
                            <a href="#" class="hover:text-white">About Us</a>
                            <a href="#" class="hover:text-white">Contact</a>
                            <a href="#" class="hover:text-white">Privacy Policy</a>
                            <a href="#" class="hover:text-white">Sitemap</a>
                            <a href="#" class="hover:text-white">Terms of Use</a>
                        </div>


                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;