import { createContext } from "react";
import type { Challenge, StatusType } from "../types";

export interface ChallengesContextType {
  challenges: Challenge[];
  addChallenge: (challenge: Challenge) => void;
  deleteChallenge: (challengeId: string) => void;
  updateChallengeStatus: (challengeId: string, newStatus: StatusType) => void;
}

export const ChallengesContext = createContext<ChallengesContextType>({
  challenges: [],
  addChallenge: () => {},
  deleteChallenge: () => {},
  updateChallengeStatus: () => {},
});
