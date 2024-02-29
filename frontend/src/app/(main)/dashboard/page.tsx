export default async function Page() {
    return (
        <div>
            {true ? (
                <h1 className="text-4xl justify-center font-bold  text-teal-400 mt-10">
                    Welcome back, 
                </h1>
            ) : null}

            <h1 className="text-xl justify-center font-light mb-8 text-grey">
                Lorem Ipsum is simply dummy text of the printing.
            </h1>
        </div>
    );
}
