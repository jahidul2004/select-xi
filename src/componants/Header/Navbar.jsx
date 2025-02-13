import PropTypes from "prop-types";

const Navbar = ({ coin }) => {
    return (
        <div className="bg-white">
            <div className="navbar bg-white my-3">
                <div className="flex-1">
                    <a className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                        <img
                            className="h-[60px]"
                            src="https://i.ibb.co.com/YT0MpzS/logo.png"
                            alt=""
                        />
                        Select XI
                    </a>
                </div>
                <div className="flex items-center">
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
                        <button className="btn btn-sm bg-gradient-to-t from-[#dd84b5] to-[#f6cb69] border-none text-white">
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
