const Footer = () => {
    return (
        <div className="bg-[#06091a] text-white p-10 rounded-lg mb-10">
            <div>
                <img
                    className="m-auto mb-5"
                    src="https://i.ibb.co.com/xqxYnD6/banner-main.png"
                    alt=""
                />
            </div>
            <div className="flex justify-between border-b border-[#777777] py-5">
                <div>
                    <h1 className="font-bold text-lg mb-4">About Us</h1>
                    <p>
                        We are a passionate team dedicated to providing the{" "}
                        <br /> best services to our customers.
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-4">Quick Links</h1>
                    <ul className="flex flex-col gap-3">
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
                        Subscribe to our newsletter for the latest updates.
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
        </div>
    );
};

export default Footer;
