import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import Loader from "./components/Loader";
import Alert from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(
    window.location.origin ? window.location.origin : window.location.href
  );

  const getLyrics = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLyrics("");
    setError("");
    try {
      if (query.length === 0) {
        setLyrics("");
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
      <Form onSubmit={(e) => getLyrics(e)}>
        <Input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search lyrics"
          value={query}
        />
        <Button type="submit">Search</Button>
      </Form>
      {error && <Alert type="danger">{error}</Alert>}
      {loading ? <Loader center /> : <Lyrics>{lyrics}</Lyrics>}
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em auto;
  max-width: 500px;
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
  font-size: 2rem;
  margin-left: 1em;
  cursor: pointer;
`;

const Lyrics = styled.div`
  max-width: 40ch;
  margin: 3em auto;
  font-size: 2rem;
  white-space: pre-line;
  text-align: center;
`;

export default App;
