import { FunctionComponent } from "react";
import { useParams } from "react-router";

interface TotemsViewProps {}

const TotemsView: FunctionComponent<TotemsViewProps> = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>View</h1>
      {id}
    </div>
  );
};

export default TotemsView;
