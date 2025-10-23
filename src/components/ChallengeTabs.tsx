import { motion } from "framer-motion";
import Badge from "./Badge";
import type { Challenges, StatusType } from "../types";

interface TabProps {
  isSelected: boolean;
  onSelect: () => void;
  badgeCaption: number;
  children: React.ReactNode;
}

function Tab({ isSelected, onSelect, badgeCaption, children }: TabProps) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      </button>
      {isSelected && (
        <motion.div layoutId="tab-indicator" className="active-tab-indicator" />
      )}
    </li>
  );
}

interface ChallengeProps {
  selectedType: StatusType;
  onSelectType: (statusType: StatusType) => void;
  challenges: Challenges;
  children: React.ReactNode;
}
export default function ChallengeTabs({
  selectedType,
  onSelectType,
  challenges,
  children,
}: ChallengeProps) {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedType === "active"}
          onSelect={() => onSelectType("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === "completed"}
          onSelect={() => onSelectType("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === "failed"}
          onSelect={() => onSelectType("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
