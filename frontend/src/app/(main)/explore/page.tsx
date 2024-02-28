import QuestCard from "@/components/QuestCard";

const questData = [
    {
        idx: 1,
        img: "https://example.com/image1.jpg",
        date: {
            postedOn: "2024-02-27",
            regDeadline: "2024-03-15",
            commencement: "2024-04-01",
        },
        title: "Dummy Quest Title 1",
        desc: "This is a dummy description for the quest 1a..",
        cm: {
            name: "John Doe",
            city: "Dummy City",
            photo: "https://example.com/photo1.jpg",
        }
    },
    {
        idx: 2,
        img: "https://example.com/image2.jpg",
        date: {
            postedOn: "2024-03-01",
            regDeadline: "2024-03-20",
            commencement: "2024-04-05",
        },
        title: "Dummy Quest Title 2",
        desc: "This is a dummy description for the quest 2.",
        cm: {
            name: "Jane Smith",
            city: "Another Dummy City",
            photo: "https://example.com/photo2.jpg",
        }
    },
    {
        idx: 1,
        img: "https://example.com/image1.jpg",
        date: {
            postedOn: "2024-02-27",
            regDeadline: "2024-03-15",
            commencement: "2024-04-01",
        },
        title: "Dummy Quest Title 1",
        desc: "This is a dummy description for the quest 1a..",
        cm: {
            name: "John Doe",
            city: "Dummy City",
            photo: "https://example.com/photo1.jpg",
        }
    },
    {
        idx: 2,
        img: "https://example.com/image2.jpg",
        date: {
            postedOn: "2024-03-01",
            regDeadline: "2024-03-20",
            commencement: "2024-04-05",
        },
        title: "Dummy Quest Title 2",
        desc: "This is a dummy description for the quest 2.",
        cm: {
            name: "Jane Smith",
            city: "Another Dummy City",
            photo: "https://example.com/photo2.jpg",
        }
    },
    {
        idx: 1,
        img: "https://example.com/image1.jpg",
        date: {
            postedOn: "2024-02-27",
            regDeadline: "2024-03-15",
            commencement: "2024-04-01",
        },
        title: "Dummy Quest Title 1",
        desc: "This is a dummy description for the quest 1a..",
        cm: {
            name: "John Doe",
            city: "Dummy City",
            photo: "https://example.com/photo1.jpg",
        }
    },
    {
        idx: 2,
        img: "https://example.com/image2.jpg",
        date: {
            postedOn: "2024-03-01",
            regDeadline: "2024-03-20",
            commencement: "2024-04-05",
        },
        title: "Dummy Quest Title 2",
        desc: "This is a dummy description for the quest 2.",
        cm: {
            name: "Jane Smith",
            city: "Another Dummy City",
            photo: "https://example.com/photo2.jpg",
        }
    },
    {
        idx: 1,
        img: "https://example.com/image1.jpg",
        date: {
            postedOn: "2024-02-27",
            regDeadline: "2024-03-15",
            commencement: "2024-04-01",
        },
        title: "Dummy Quest Title 1",
        desc: "This is a dummy description for the quest 1a..",
        cm: {
            name: "John Doe",
            city: "Dummy City",
            photo: "https://example.com/photo1.jpg",
        }
    },
    {
        idx: 2,
        img: "https://example.com/image2.jpg",
        date: {
            postedOn: "2024-03-01",
            regDeadline: "2024-03-20",
            commencement: "2024-04-05",
        },
        title: "Dummy Quest Title 2",
        desc: "This is a dummy description for the quest 2.",
        cm: {
            name: "Jane Smith",
            city: "Another Dummy City",
            photo: "https://example.com/photo2.jpg",
        }
    },
    {
        idx: 1,
        img: "https://example.com/image1.jpg",
        date: {
            postedOn: "2024-02-27",
            regDeadline: "2024-03-15",
            commencement: "2024-04-01",
        },
        title: "Dummy Quest Title 1",
        desc: "This is a dummy description for the quest 1a..",
        cm: {
            name: "John Doe",
            city: "Dummy City",
            photo: "https://example.com/photo1.jpg",
        }
    },
    {
        idx: 2,
        img: "https://example.com/image2.jpg",
        date: {
            postedOn: "2024-03-01",
            regDeadline: "2024-03-20",
            commencement: "2024-04-05",
        },
        title: "Dummy Quest Title 2",
        desc: "This is a dummy description for the quest 2.",
        cm: {
            name: "Jane Smith",
            city: "Another Dummy City",
            photo: "https://example.com/photo2.jpg",
        }
    }
];


export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl justify-center font-bold mb-8">Our Quests</h1>
            <div className="flex justify-center flex-wrap w-full gap-4">
                {questData.map((quest, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/5  h-full overflow-hidden ">
                        <QuestCard data={quest} />
                    </div>
                ))}
            </div>
        </div>
    );
}
