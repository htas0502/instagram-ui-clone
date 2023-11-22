function Sidebar() {
    return (
        <div className="bg-black lg:w-[244px] md:w-[72px] h-[400px] text-white p-[20px] border-r border-gray-500">
            <h1 className="font-semibold text-2xl w-full h-[50px] flex align-middle items-center mb-10">Instagram</h1>
            <div className="flex flex-col">
                <button className="flex items-start font-semibold text-xl bg-slate-500 mt-3 mb-3 p-2">Home</button>
                <button className="flex items-start font-semibold text-xl bg-slate-500 mt-3 mb-3 p-2">Search</button>
                <button className="flex items-start font-semibold text-xl bg-slate-500 mt-3 mb-3 p-2">Create</button>
                <button className="flex items-start font-semibold text-xl bg-slate-500 mt-3 mb-3 p-2">Profile</button>
            </div>
        </div>
    );
}

export default Sidebar;
