"use client";

import React, { useEffect } from "react";

interface questDataType {
    // put the types here
}

export default function QuestDetails({ questId }: { questId: string }) {

    useEffect(() => {
        // fetch quest details from backend
        // API: BACKEND_URL/api/quest/[questId]
        // will return the details of that quest
        // type of return data will be the interface defined above
    })

    // put the disgns and stuff here and it is being called in (main)questDetails/[questId]/page.tsx
    return <div>
        This is quest page for quest with id : {questId}
    </div>;
}
