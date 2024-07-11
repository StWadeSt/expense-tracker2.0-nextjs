import { SignedOut } from "@clerk/nextjs";
import Guest from "./components/guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "./components/AddTransactions";
import Balance from "./components/Balance";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />
  }
  return ( <main>
    <h2>Welcome, {user.firstName}</h2>
    <Balance />
    <AddTransaction />
  </main> );
}
 
export default HomePage;