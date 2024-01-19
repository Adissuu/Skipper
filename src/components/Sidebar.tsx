import Image from "next/image";
import { PiExport } from "react-icons/pi";
import { BiImport } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { PiNotepadBold } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { MdLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
function Sidebar({ display, setDisplay }: { display: Boolean, setDisplay: React.Dispatch<React.SetStateAction<any>> }) {
    const toggleDisplay = () => {
        setDisplay((prevDisplay: Boolean) => !prevDisplay);
    };

    return (
        <aside>
            <div className={"relative w-12 z-50 bg-[#101318] h-screen bg-green-500 "}>
                <div className="flex flex-col items-center justify-between h-full py-2">
                    {/* Export Button */}
                    <div className="flex flex-col">
                        <button onClick={() => console.log("Export")} className="text-2xl bg-green-700 p-2 rounded-lg text-green-200">
                            <PiExport />
                        </button>

                        {/* Import Button */}
                        <button onClick={() => console.log("Import")} className="text-2xl bg-green-700 p-2 rounded-lg text-green-200 mt-4">
                            <BiImport />
                        </button>
                    </div>

                    {/* Trophy Icon with Confirmation */}
                    <button onClick={() => {
                        if (window.confirm("Are you sure you want to remove all data?")) {
                            console.log("Data removed");
                        }
                    }} className="text-2xl">
                        <BsTrophy />
                    </button>


                    <button onClick={toggleDisplay} className="text-2xl">{display ? <PiNotepadBold /> : <GoGraph />}</button>

                    {/* Light/Dark Mode Button */}
                    <button onClick={() => console.log("Toggle light/dark mode")} className="text-2xl">
                        <MdLightMode />
                    </button>

                    {/* Profile Icon */}
                    <button onClick={() => console.log("Profile")} className="text-2xl mb-4">
                        <CgProfile />
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;

