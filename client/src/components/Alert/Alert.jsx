import styled from "styled-components";

const Alert = ({ children, type, center }) => {
  return (
    <Div type={type} center={center}>
      {children}
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  margin: 1em 0;
  padding: 0.75em 1.25em;
  font-size: 1.6rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  text-align: ${({ center }) => (center ? "center" : "left")};

  ${({ type }) => {
    switch (type) {
      case "primary":
        return `
          color: #004085;
          background-color: #cce5ff;
          border-color: #b8daff;
        `;
      case "success":
        return `
          color: #155724;
          background-color: #d4edda;
          border-color: #c3e6cb;
        `;
      case "danger":
        return `
          color: #721c24;
          background-color: #f8d7da;
          border-color: #f5c6cb;
        `;
      case "warning":
        return `
          color: #856404;
          background-color: #fff3cd;
          border-color: #ffeeba;
        `;
      case "info":
        return `
          color:  #0c5460;
          background-color:   #d1ecf1;
          border-color: #bee5eb;
        `;
      default:
        return `
          color: #0c5460;
          background-color:  #d1ecf1;
          border-color: #bee5eb;
        `;
    }
  }}
`;

export default Alert;
