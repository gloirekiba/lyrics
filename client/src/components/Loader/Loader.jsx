import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

const Loader = (center) => {
  return (
    <Loading oader center>
      <TailSpin color="#000" />
    </Loading>
  );
};

const Loading = styled.div`
  ${({ center }) =>
    center && "display: flex; align-items: center; justify-content: center;"}
`;

export default Loader;
