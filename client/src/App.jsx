import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

import Loader from "./components/Loader";
import Alert from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getLyrics = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLyrics("");
    setError("");

    try {
      if (query.length === 0) {
        setLoading(false);
        return;
      }

      const { data } = await axios.get(`${window.location.origin}/api/lyrics`, {
        params: {
          query,
        },
      });

      setLyrics(data.lyrics);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("No result");
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Form onSubmit={(e) => getLyrics(e)}>
          <Input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search song"
            value={query}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Header>
      {error && (
        <Alert type="danger" center>
          {error}
        </Alert>
      )}
      {loading ? <Loader center /> : <Lyrics>{lyrics}</Lyrics>}
    </Container>
  );
};

const Header = styled.header`
  background-color: #fff;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 0;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  min-width: 0;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 2rem;
  outline: none;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-weight: 500;
  font-size: 2rem;
  margin-left: 1em;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100%;
    margin: 0.5em 0;
  }
`;

const Lyrics = styled.div`
  max-width: 40ch;
  margin: 3em auto;
  font-size: 2rem;
  white-space: pre-line;
  text-align: center;
`;

export default App;
