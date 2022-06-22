import { useParams } from "react-router-dom";

const Router1 = () => {
  const { param } = useParams();
  console.log(param);
  return <div>router1 :: param = {param}</div>;
};

export default Router1;
