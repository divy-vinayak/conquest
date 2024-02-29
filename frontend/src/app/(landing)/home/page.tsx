import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-start justify-center max-w-3xl mx-20 my-40">
            <div className="text-6xl font-bold text-teal-400 ">
                Welcome to ConQuest
                <br />
                <span className="text-4xl font-light">
                    Discover, Experience, Connect
                </span>
            </div>
            <div className="mt-6 text-lg text-left">
                It’s your gateway to immersive experiences and meaningful
                connections in rural Japan. Our platform is designed to bring
                together adventurers, explorers, and enthusiasts from around the
                world to discover the beauty, culture, and community spirit of
                Japan's heartlands.
            </div>
            
        </div>
        
        
    );
}
