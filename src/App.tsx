
import "./App.css";
// import UnitLevelBar from "./components/frags/level-bar";
// import PlayerHeader from "./components/frags/player-header";
import PlayerDashboard from "./components/organisms/player-dashboard";
import usePlayers from "./utils/hooks/use-players";
import HomeHeader from "@/components/organisms/home-header";
function App() {

    // const [, setCurrTag] = useAtom(playerAtom);

    const {
        player: playerInfo,
    } = usePlayers()

    // const [players] = useAtom(tagsAtom)

    return (
        // <ToastContainer position="bottom-center">
        <div className="flex flex-col h-screen w-full justify-center item-center">
            <HomeHeader />
            {playerInfo && <PlayerDashboard playerInfo={playerInfo} />}
        </div>
    );
}

export default App;
