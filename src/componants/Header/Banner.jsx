import PropTypes from "prop-types";

const Banner = ({addCoin}) => {
    return (
        <div className="bg-black rounded-xl">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/fdrKmY5/bg-shadow.png)",
                    borderRadius: "12px",
                }}
            >
                <div className="bg-black opacity-60"></div>

                <div className="hero-content text-neutral-content text-center">
                    <div className="w-full">
                        <img
                            className="m-auto"
                            src="https://i.ibb.co.com/xqxYnD6/banner-main.png"
                            alt=""
                        />
                        <h1 className="mb-5 text-5xl font-bold">
                            Assemble Your Ultimate Dream 11 Cricket Team
                        </h1>
                        <p className="mb-5">Beyond Boundaries Beyond Limits</p>
                        <div className="border border-[#e6fd29] p-1 w-max m-auto rounded-lg">
                            <button onClick={addCoin} className="btn bg-[#e6fd29] border-none">
                                Claim Free Credit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    addCoin: PropTypes.func.isRequired,
};

export default Banner;
