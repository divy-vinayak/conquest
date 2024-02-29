export default function Home() {
    // Dummy user data
    const userData = {
      name: "John Doe",
      age: "22",
      gender: "male",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
      placeOfBirth: "New York",
      currentResidence: "Los Angeles",
      work: "Software Engineer",
      hobbies: "Reading, Cooking",
      currentPassword: "", // Leave empty for security reasons
      newPassword: "",
      confirmNewPassword: ""
    };
  
    return (
        <div className="max-w-xl mx-auto" >
      <div className="flex flex-col px-5">
        <div className="flex flex-col items-center bg-black"> <h1 className="text-4xl justify-center font-bold  text-teal-400 mt-10">Your Profile</h1> </div>
        <div className="flex gap-5 justify-between pr-1.5 mt-20 w-full whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-3 mt-4">Name</label>
        <input
          type="text"
          value={userData.name}
          placeholder="Name"
          className="rounded-lg bg-grey mb-4 border-2 p-4 text-black px-1"
        />
        </div>
        <div className="flex flex-col">
            <label htmlFor="age" className="text-white mb-3 mt-4">Age</label>
        <input
          type="text"
          value={userData.age}
          placeholder="Age"
          className="rounded-lg bg-grey mb-4 border-2 p-4 px-1 text-black"
        />
        </div>

        </div>
        <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-3 mt-4">Email Address</label>
        <input
          type="text"
          value={userData.email}
          placeholder="Email Address"
          className="rounded-lg bg-grey mb-4 border-2 p-4 border-whi outline-non text-black"
        />
        </div>
        <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-white mb-3">Phone Number</label>
        <input
          type="text"
          value={userData.phoneNumber}
          placeholder="Phone Number"
          className="rounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
        />
        </div>
        <div className="mb-6 mt-4"><hr /></div>
        
        <div className="flex flex-col">
            <label htmlFor="address" className="text-white mb-3">Address</label>
        <input
          type="text"
          value={userData.address}
          placeholder="Address"
          className="rounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
        />
        </div>
        <div className="flex flex-col">
            <label htmlFor="placeOfBirth" className="text-white mb-3">Place of Birth</label>
        <input
          type="text"
          value={userData.placeOfBirth}
          placeholder="Place of Birth"
          className="rounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
        />
        </div>
        <div className="flex flex-col">
            <label htmlFor="currentResidence" className="text-white mb-3">Current Place of Residence</label>
        <input
          type="text"
          value={userData.currentResidence}
          placeholder="Current Place of Residence"
          className="rounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
        />
        </div>
        <div className="mb-6 mt-4"><hr /></div>
        <div className="flex flex-col">
            <label htmlFor="work" className="text-white mb-3">Work</label>
        <input
          type="text"
          value={userData.work}
          placeholder="Work"
          className="rounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
        />
        </div>
        <div className="flex flex-col">
            <label htmlFor="hobbies" className="text-white mb-3">Hobbies & Interests</label>
        <input
          type="text"
          value={userData.hobbies}
          placeholder="Hobbies & Interests"
          className="rounded-lg bg-grey border-2 p-4 border-whi outline-none text-black mb-4"
        />
        </div>
        <div className="mb-6 mt-4"><hr /></div>
        <div className="flex flex-col">
            <label htmlFor="currentpassword" className="text-white mb-3">Current Password</label>
        <input
          type="password"
          placeholder="Current Password"
          className="rounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
        />
        </div>
        <div className="flex flex-col">
            <label htmlFor="newpassword" className="text-white mb-3">New Password</label>
        <input
          type="password"
          placeholder="New Password"
          className="rounded-lg mb-4 bg-grey border-2 p-4 border-whi outline-none text-black"
        />
        </div>
        <div className="flex flex-col">
            <label htmlFor="confirmnewpassword" className="text-white mb-3">Confirm New Password</label>
        <input
          type="password"
          placeholder="Confirm New Password"
          className="rounded-lg bg-grey border-2 p-4 border-whi outline-none text-black"
        />
        </div>
        <button className="justify-center self-end px-4 py-4 mt-12 font-bold leading-5 text-white whitespace-nowrap bg-black border-2 border-white rounded-lg text-lg hover:bg-teal-400 max-md:px-5 max-md:mt-10 mb-10">
          Save Changes
        </button>
      </div>
      </div>
    );
  }
  