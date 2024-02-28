import QuestDetails from "@/components/QuestDetails";

export default function Page({ params }: { params: { questId: string } }) {
    return <div>
        <QuestDetails questId={params.questId}/>
    </div>;
}
