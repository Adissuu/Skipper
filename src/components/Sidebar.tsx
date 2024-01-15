import Image from "next/image";
import { PiExport } from "react-icons/pi";
import { BiImport } from "react-icons/bi";
function Sidebar({ display, setDisplay }: { display: Boolean, setDisplay: React.Dispatch<React.SetStateAction<any>> }) {
    const toggleDisplay = () => {
        setDisplay((prevDisplay: Boolean) => !prevDisplay);
    };

    return (
        <aside>
            <div className={"relative w-12 z-50 bg-[#101318] h-screen bg-green-500 "}>
                <div className="flex flex-col items-center justify-between h-full py-2">
                    {/* Export Button */}
                    <button onClick={() => console.log("Export")} className="text-xl">
                        <PiExport />
                    </button>

                    {/* Import Button */}
                    <button onClick={() => console.log("Import")} className="text-xl">
                        <BiImport />
                    </button>

                    {/* Trophy Icon with Confirmation */}
                    <button onClick={() => {
                        if (window.confirm("Are you sure you want to remove all data?")) {
                            console.log("Data removed");
                        }
                    }}>
                        🏆
                    </button>


                    <button onClick={toggleDisplay}>{display ? "job" : "graph"}</button>

                    {/* Light/Dark Mode Button */}
                    <button onClick={() => console.log("Toggle light/dark mode")}>Light</button>

                    {/* Profile Icon */}
                    <button onClick={() => console.log("Profile")}>👤</button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;

