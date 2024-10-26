import Header from "./componants/Header/Header";
import Players from "./componants/Players/Players";
import Footer from "./componants/Footer/Footer";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const showToast = (text) => {
        toast(text);
    };

    let [coin, setCoin] = useState(0);

    const addCoin = () => {
        setCoin(coin + 6000000);
        showToast("Free credit claimed successfully");
    };

    const removeCoin = (coinAmount) => {
        setCoin(coin - coinAmount);
    };

    return (
        <div>
            <div className="w-[95%] md:container lg:container m-auto">
                <Header
                    showToast={showToast}
                    addCoin={addCoin}
                    coin={coin}
                ></Header>
                <Players
                    removeCoin={removeCoin}
                    showToast={showToast}
                    coin={coin}
                ></Players>
                <ToastContainer />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
