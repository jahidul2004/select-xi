import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";
import Selectedplayer from "./Selectedplayer";
import PropTypes from "prop-types";

const Players = ({ coin, showToast, removeCoin }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("player.json")
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

    let [selectedArea, setSelectedArea] = useState(false);

    const handleSelectBtn = () => {
        setSelectedArea(true);
    };
    const handleAvailableBtn = () => {
        setSelectedArea(false);
    };

    // Choose player button functionality

    let [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleChoosePlayer = (player) => {
        if (player.price > coin) {
            showToast("You don't have enough coin to buy this player.");
            return;
        } else if (selectedPlayers.length > 5) {
            showToast("You can't select more than 6 players.");
        } else if (selectedPlayers.some((p) => p.id === player.id)) {
            showToast("You have already selected this player.");
            return;
        } else {
            setSelectedPlayers([...selectedPlayers, player]);
            removeCoin(player.price);
            showToast("Player added successfully!!");
        }
    };

    // Delete player functionality
    const handleDeletePlayer = (playerId) => {
        setSelectedPlayers((prevPlayers) =>
            prevPlayers.filter((p) => p.id !== playerId)
        );
    };

    return (
        <div className="pb-20">
            <div className="mt-5 flex justify-between items-center my-2">
                <h1 className="text-3xl font-bold">
                    {!selectedArea
                        ? `Avilable Players`
                        : `Selected Players(${selectedPlayers.length}/6)`}
                </h1>
                <div className="flex gap-3 border p-2 rounded">
                    <button
                        onClick={handleAvailableBtn}
                        className={`btn ${!selectedArea && "bg-[#e6fd29]"}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={handleSelectBtn}
                        className={`btn ${selectedArea && "bg-[#e6fd29]"}`}
                    >
                        Selected{`(${selectedPlayers.length})`}
                    </button>
                </div>
            </div>

            {/* Players Container */}
            <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 pb-20 ${
                    selectedArea && "hidden"
                }`}
            >
                {players.map((player) => (
                    <Player
                        handleChoosePlayer={handleChoosePlayer}
                        key={player.id}
                        player={player}
                    ></Player>
                ))}
            </div>

            {/* Selected Players Container */}
            <div className={`mb-20 ${!selectedArea && "hidden"}`}>
                {selectedPlayers.map((player) => {
                    return (
                        <Selectedplayer
                            showToast={showToast}
                            key={player.id}
                            player={player}
                            handleDeletePlayer={handleDeletePlayer}
                        ></Selectedplayer>
                    );
                })}
                <button
                    onClick={handleAvailableBtn}
                    className="btn bg-[#e6fd29]"
                >
                    Add More Player
                </button>
            </div>
        </div>
    );
};

Players.propTypes = {
    coin: PropTypes.number.isRequired,
    showToast: PropTypes.func.isRequired,
    removeCoin: PropTypes.func.isRequired,
};

export default Players;
