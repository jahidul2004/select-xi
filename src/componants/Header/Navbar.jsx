import PropTypes from "prop-types";

const Navbar = ({coin}) => {
    return (
        <div className="bg-white">
            <div className="navbar bg-white">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img
                            className="h-[40px]"
                            src="https://i.ibb.co.com/xqxYnD6/banner-main.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Fixture</a>
                        </li>
                        <li>
                            <a>Team</a>
                        </li>
                        <li>
                            <a>Schedule</a>
                        </li>
                        <button className="btn border border-black font-bold">
                            <span>{coin}</span> Coin
                            <i className="fa-solid text-[#fbd93b] text-xl fa-coins"></i>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    coin: PropTypes.number.isRequired,
};


export default Navbar;
