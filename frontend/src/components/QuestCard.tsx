
interface questDataType {
    idx: number,
    img: string,
    date: {
        postedOn: string,
        regDeadline: string,
        commencement: string,
    },
    title: string,
    desc: string,
    cm: {
        name: string,
        city: string,
        photo: string,
    }
}

export default function QuestCard({data}: {data: questDataType}){
    return (
        <div className="flex flex-col pb-5 text-xs leading-6 text-white bg-black  shadow-md">
        <img loading="lazy" src={data.img} alt={data.title} className="w-full h-48 object-cover rounded-t-md" />
        <div className="flex flex-col p-5">
            <div className="text-sm text-gray-400">{data.date.postedOn}</div>
            <h2 className="text-lg font-bold mt-3">{data.title}</h2>
            <p className="mt-2">{data.desc}</p>
            <div className="h-px bg-gray-200 mt-4" />
            <div className="flex items-center justify-between mt-4">
                <img loading="lazy" src={data.cm.photo} alt={data.cm.name} className="w-10 h-10 object-cover rounded-full" />
                <div className="flex flex-col ml-3">
                    <span className="font-semibold">{data.cm.name}</span>
                    <span className="text-gray-400">{data.cm.city}</span>
                </div>
            </div>
        </div>
    </div>
    );
}