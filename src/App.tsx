import "./App.css";
import PlayerDashboard from "./components/organisms/player-dashboard";
import usePlayers from "./utils/hooks/use-players";
import HomeHeader from "@/components/organisms/home-header";
import EventBanner from "./components/frags/event-banner";
import { useAtom } from "jotai";
import { verificationAtom } from "./services/atoms";
import UserVerifyScreen from "./components/organisms/user-verify-screen";

function App() {

    // const [, setCurrTag] = useAtom(playerAtom);

    const {
        player: playerInfo,
    } = usePlayers()

    const [ verified ] = useAtom(verificationAtom)

    // const [players] = useAtom(tagsAtom)
    if(!verified) return (
        <UserVerifyScreen />
    )

    return (
        // <ToastContainer position="bottom-center">
        <div className="flex flex-col min-h-screen w-full justify-start item-center pt-20">
            <HomeHeader />
            <div className="w-11/12 self-center flex shadow-md rounded-md">
                <EventBanner />
            </div>
            { playerInfo && <PlayerDashboard playerInfo={playerInfo} /> }
        </div>
    );
}

export default App;
