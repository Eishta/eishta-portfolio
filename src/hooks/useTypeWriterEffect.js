import { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";

const useTypeWriterEffect = (list = [], delay) => {
  let [phraseIndex, setPhraseIndex] = useState(0);
  let [isGoingForward, setGForward] = useState(true);
  const [title, setTitle] = useState("");

  function getModifiedValue() {
    let length;
    if (isGoingForward && title !== list[phraseIndex]) {
      length = title.length + 1;
    } else if (!isGoingForward) length = title.length - 1;
    let temp = list[phraseIndex]?.slice(0, length);
    return temp;
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  useEffect(() => {
    let id;
    if (list.length) {
      let temp = getModifiedValue();
      if (temp.length === list[phraseIndex]?.length) {
        sleep(2000).then(() => setGForward(false));
      }
      if (temp.length === 0) {
        let current = (phraseIndex + 1) % list.length;
        // sleep(2000).then(() => setGForward(true));
        setPhraseIndex(current);
        setGForward(true);
      }
      id = setTimeout(() => {
        setTitle(temp);
      }, delay);
    }

    return () => {
      clearTimeout(id);
    };
  }, [title, phraseIndex, isGoingForward, list, delay]);

  return title;
};
export default useTypeWriterEffect;
