import Navbar from "./Navbar";
import Banner from "./Banner";
import PropTypes from "prop-types";

const Header = ({addCoin, coin}) => {
    return (
        <div>
            <Navbar coin={coin}></Navbar>
            <Banner addCoin = {addCoin}></Banner>
        </div>
    );
};

Header.propTypes = {
    addCoin: PropTypes.func.isRequired,
    coin: PropTypes.number.isRequired,
};

export default Header;