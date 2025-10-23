export type Challenge = {
  id: string;
  status: StatusType;
  deadline: string;
  title: string;
  image: ImageType;
  description: string;
};
export type Challenges = {
  active: Challenge[];
  completed: Challenge[];
  failed: Challenge[];
};
export type StatusType = "active" | "completed" | "failed";
export type ImageType = {
  src: string;
  alt: string;
};
export interface ChallengesContextType {
  challenges: Challenge[];
  addChallenge: (challenge: Challenge) => void;
  updateChallengeStatus: (challengeId: string, newStatus: StatusType) => void;
  deleteChallenge: (challengeId: string) => void;
}
