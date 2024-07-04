import { SignedOut } from "@clerk/nextjs";
import Guest from "./components/guest";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />
  }
  return ( <main>
    <h1>Welcome, {user.firstName}</h1>
  </main> );
}
 
export default HomePage;