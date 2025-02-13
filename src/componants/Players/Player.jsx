import PropTypes from "prop-types";

const Player = ({ handleChoosePlayer, player }) => {
    const { name, image, country, role, batting_style, price } = player;

    return (
        <div className="card bg-[#f7f7f7] p-4">
            <figure>
                <img
                    className="w-full h-[250px] rounded-lg"
                    src={image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body p-0 mt-5">
                <h2 className="card-title text-xl font-bold">
                    <i className="fa-solid fa-user"></i>
                    {name}
                </h2>
                <div className="flex justify-between items-center">
                    <h2>
                        <i className="fa-solid fa-flag"></i> {country}
                    </h2>
                    <h2 className="bg-[#f1f2f2] px-2 py-1 rounded-lg">
                        {role}
                    </h2>
                </div>
                <hr />
                <div>
                    <h1 className="font-bold">Rating</h1>
                    <div>
                        <div className="flex justify-between">
                            <h1>Left-Hand-Bat</h1>
                            <h1 className="">{batting_style}</h1>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <h1>Price:{price}$</h1>
                            <button
                                onClick={() => {
                                    handleChoosePlayer(player);
                                }}
                                className="btn btn-sm bg-gradient-to-t from-[#dd84b5] to-[#f6cb69] border-none text-white"
                            >
                                Choose player
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        batting_style: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    handleChoosePlayer: PropTypes.func.isRequired,
};

export default Player;
