import React, { useContext } from "react";
//services
import { addNoteToDom } from "../../services/staveService";
//context
import PartitionContext from "../../context/PartitionContext";
//components
import StaveContainer from "../stave/StaveContainer";

/**
 * Partition contains two staves made to receive the user's choosen notes.
 */
const Partition = () => {
  const partitionContext = useContext(PartitionContext);
  const userComposition = partitionContext.notes;

  userComposition.map((note) => {
    addNoteToDom(
      note,
      partitionContext.notes,
      note.image,
      partitionContext.allNotesWidth,
      partitionContext.setAllNotesWidth
    );

    return null;
  });

  return <StaveContainer />;
};

export default Partition;
