import Header from "./componants/Header/Header";
import Players from "./componants/Players/Players";
import Footer from "./componants/Footer/Footer";
import { useState } from "react";

function App() {
    let [coin, setCoin] = useState(0);

    const addCoin = () => {
        setCoin(coin + 600000);
    };
    return (
        <div>
            <Header addCoin={addCoin} coin={coin}></Header>
            <Players></Players>
            <Footer></Footer>
        </div>
    );
}

export default App;
