import PropTypes from "prop-types";


const Selectedplayer = ({ player }) => {
    return (
        <div className="border w-full rounded-lg p-2 my-2 flex justify-between items-center">
            <div className="flex  gap-3 items-center">
                <img
                    className="w-[60px] h-[60px] rounded-full"
                    src={player.image}
                    alt=""
                />
                <div>
                    <h1 className="font-bold text-lg">{player.name}</h1>
                    <p>{player.batting_style}</p>
                </div>
            </div>
            <div>
                <i className="mr-4 cursor-pointer text-error fa-regular fa-trash-can"></i>
            </div>
        </div>
    );
};

Selectedplayer.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        batting_style: PropTypes.string.isRequired,
    }).isRequired,
};

export default Selectedplayer;
