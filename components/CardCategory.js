const CardCategory = ({ title = "no title", content = [] }) => {
    return (
        <div className="w-full sm:w-52">
            <div className="w-40 text-sm font-bold border-b-2 border-zinc-600 pb-4">{title}</div>
            <div className="mt-8 border border-red-600 overflow-hidden">
                <div className="border border-green-400 h-36 w-full"></div>
                <div className="text-xs text-center">639 View 02/03/2024</div>
                {content.map((item, index) => (
                    <div key={index} className="mt-3 pb-1 text-sm text-slate-600 border-b">{item}</div>
                ))}
            </div>
        </div>
    );
}

export default CardCategory;