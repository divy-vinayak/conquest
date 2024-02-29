import { getSession } from "@auth0/nextjs-auth0";

export default async function Page() {
    const session = await getSession();
    const user = session?.user;
    console.log({user: user})
    return (
        <div>
            {
                user? <h1 className="text-4xl justify-center font-bold  text-teal-400 mt-10">Welcome back, {user.given_name} </h1>: null 
            }
        
        <h1 className="text-xl justify-center font-light mb-8 text-grey">Lorem Ipsum is simply dummy text of the printing.</h1>
        </div>
      );
}   