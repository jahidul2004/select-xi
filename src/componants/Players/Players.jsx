import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";

const Players = () => {
    const [players, setPlayers] = useState([]);
    console.log(players);

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

    return (
        <div className="pb-20">
            <div className="mt-5 flex justify-between items-center my-2">
                <h1 className="text-3xl font-bold">
                    {!selectedArea ? "Avilable Players" : "Selected Players"}
                </h1>
                <div className="flex gap-3 border p-2 rounded">
                    <button
                        onClick={handleAvailableBtn}
                        className="btn bg-[#e6fd29]"
                    >
                        Available
                    </button>
                    <button onClick={handleSelectBtn} className="btn">
                        Selected
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
                    <Player key={player.id} player={player}></Player>
                ))}
            </div>

            {/* Selected Players Container */}
            <div className="my-20"></div>
        </div>
    );
};

export default Players;
