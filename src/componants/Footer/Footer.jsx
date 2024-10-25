const Footer = () => {
    return (
        <div className="bg-[#06091a] text-white pt-20 pb-10 px-10 relative">
            <div className="mt-20">
                <img
                    className="m-auto mb-5"
                    src="https://i.ibb.co.com/xqxYnD6/banner-main.png"
                    alt=""
                />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between border-b border-[#777777] py-5">
                <div>
                    <h1 className="font-bold text-lg mb-4">About Us</h1>
                    <p>
                        We are a passionate team <br /> dedicated to providing
                        the best <br /> services to our customers.
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-4">Quick Links</h1>
                    <ul className="flex flex-col gap-3 list-disc">
                        <a href="">
                            <li>Home</li>
                        </a>
                        <a href="">
                            <li>Service</li>
                        </a>
                        <a href="">
                            <li>About</li>
                        </a>
                        <a href="">
                            <li>Contact</li>
                        </a>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-4">Subscribe</h1>
                    <p className="mb-2">
                        Subscribe to our newsletter for the <br /> latest
                        updates.
                    </p>
                    <input
                        placeholder="Enter your Email"
                        className="input rounded-r-none"
                        type="text"
                    />
                    <button className="btn border-none rounded-l-none bg-[#edc78f]">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="text-center mt-5">
                <small>@2024 Your Company All Rights Reserved.</small>
            </div>

            {/* Absolute Card */}
            <div className="w-[80%] text-center absolute top-[-17%] left-1/2 transform -translate-x-1/2 border p-4 rounded-lg">
                <div className="bg-gradient-to-tr from-[#b4e6f5] to-[#f9d995] p-10 rounded-xl">
                    <h1 className="text-2xl font-bold text-black">
                        Subscribe to our Newsletter
                    </h1>
                    <p className="text-[#000000bd] my-2">
                        Get the latest updates and news right in your inbox!
                    </p>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-center">
                        <input
                            type="text"
                            placeholder="Enter Your Email"
                            className="input"
                        />
                        <button className="btn bg-gradient-to-t from-[#dd84b5] to-[#f6cb69] border-none">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
