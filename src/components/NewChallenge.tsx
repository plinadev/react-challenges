import { useContext, useRef, useState, type FormEvent } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import Modal from "./Modal";
import { ChallengesContext } from "../store/ChallengesContext";
import type { ImageType, Challenge } from "../types";
import images from "../assets/images";

interface NewChallengeProps {
  onDone: () => void;
}

export default function NewChallenge({ onDone }: NewChallengeProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const deadlineRef = useRef<HTMLInputElement>(null);

  const [scope, animate] = useAnimate();
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image: ImageType) {
    setSelectedImage(image);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = titleRef.current?.value?.trim() || "";
    const description = descriptionRef.current?.value?.trim() || "";
    const deadline = deadlineRef.current?.value?.trim() || "";

    if (!title || !description || !deadline || !selectedImage) {
      animate(
        scope.current?.querySelectorAll("input, textarea") ?? [],
        { x: [-10, 0, 10, 0] },
        {
          type: "tween", 
          ease: "linear", 
          duration: 0.2,
          delay: stagger(0.05),
        }
      );
      return;
    }

    const challenge: Challenge = {
      id: Math.random().toString(),
      title,
      description,
      deadline,
      image: selectedImage,
      status: "active",
    };

    addChallenge(challenge);
    onDone();
  }

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={titleRef} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={descriptionRef} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadlineRef} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul
          id="new-challenge-images"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {images.map((image) => (
            <motion.li
              key={image.alt}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.8, 1.3, 1] },
              }}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? "selected" : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button type="submit">Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
