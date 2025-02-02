import { FunctionComponent } from "react";
import { useParams } from "react-router";

interface TotemsEditProps {}

const TotemsEdit: FunctionComponent<TotemsEditProps> = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit</h1>
      {id}
    </div>
  );
};

export default TotemsEdit;
