import './App.css';
import LeftBar from "./services/LeftBar";
import {BrowserRouter} from "react-router-dom";
import Header from "./services/Header";
import RightDataDisplay from "./services/RightDataDisplay";
import {Box} from "@material-ui/core";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Box display={"flex"}>
                    <LeftBar/>
                    <RightDataDisplay/>
                </Box>
            </BrowserRouter>
        </div>
    );
}

export default App;
