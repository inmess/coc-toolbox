import "./App.css";
import PlayerDashboard from "./components/organisms/player-dashboard";
import usePlayers from "./utils/hooks/use-players";
import HomeHeader from "@/components/organisms/home-header";
import EventBanner from "./components/frags/event-banner";

function App() {

    // const [, setCurrTag] = useAtom(playerAtom);

    const {
        player: playerInfo,
    } = usePlayers()

    // const [players] = useAtom(tagsAtom)

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
