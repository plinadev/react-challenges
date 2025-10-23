import Challenges from "../components/Challenges";
import Header from "../components/Header";
import ChallengesContextProvider from "../store/ChallengesContextProvider";


export default function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
