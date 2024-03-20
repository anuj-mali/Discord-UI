import Channels from "./components/Channels";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

export default function App() {
  return (
    <>
      <div className="flex w-screen font-gg_sans">
        <Sidebar />
        <main className="flex ml-[4.5rem] w-full">
          <Channels />
          <Chat />
        </main>
      </div>
    </>
  );
}
