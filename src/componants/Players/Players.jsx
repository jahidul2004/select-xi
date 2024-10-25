import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";
import Selectedplayer from "./Selectedplayer";
import PropTypes from "prop-types";

const Players = ({ coin }) => {
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
        if (player.price > coin || selectedPlayers.length > 5) {
            alert("You don't have enough money");
            return;
        } else {
            setSelectedPlayers([...selectedPlayers, player]);
            console.log("Length is:", selectedPlayers.length);
        }
    };

    return (
        <div className="pb-20">
            <div className="mt-5 flex justify-between items-center my-2">
                <h1 className="text-3xl font-bold">
                    {!selectedArea ? "Avilable Players" : "Selected Players"}
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
                    console.log("Player clicked:", player.name);
                    console.log("Length is:", selectedPlayers.length);
                    return (
                        <Selectedplayer
                            key={player.id}
                            player={player}
                        ></Selectedplayer>
                    );
                })}
            </div>
        </div>
    );
};

Players.propTypes = {
    coin: PropTypes.number.isRequired,
};

export default Players;
