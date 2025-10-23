import { useState } from "react";
import { ChallengesContext } from "./ChallengesContext";
import type { Challenge, ChallengesContextType, StatusType } from "../types";

export default function ChallengesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  function addChallenge(challenge: Challenge) {
    setChallenges((prev) => [
      { ...challenge, id: Math.random().toString(), status: "active" },
      ...prev,
    ]);
  }

  function deleteChallenge(challengeId: string) {
    setChallenges((prev) => prev.filter((c) => c.id !== challengeId));
  }

  function updateChallengeStatus(challengeId: string, newStatus: StatusType) {
    setChallenges((prev) =>
      prev.map((c) => (c.id === challengeId ? { ...c, status: newStatus } : c))
    );
  }

  const value: ChallengesContextType = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext.Provider value={value}>
      {children}
    </ChallengesContext.Provider>
  );
}
