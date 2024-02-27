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
        desc: "This is a dummy description for the quest 1.",
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
        desc: "This is a dummy description for the quest 1.",
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
        desc: "This is a dummy description for the quest 1.",
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
        desc: "This is a dummy description for the quest 1.",
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
        desc: "This is a dummy description for the quest 1.",
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
        <div className="flex mx-20 my-20 flex-wrap h-screen p-4 gap-2">
    {questData.map((quest, index) => (
        <div key={index} className="w-1/4 overflow-hidden">
            <QuestCard data={quest} />
        </div>
    ))}
</div>
    );
}
