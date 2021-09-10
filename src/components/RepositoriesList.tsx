import React, { useState } from "react";
import { useSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import styled from "styled-components";
import { TextArea } from "@blueprintjs/core";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
`;

const List = styled.div`
  list-style: none;
`;

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <TextArea value={term} onChange={(e) => setTerm(e.target.value)} />
        {/* <input value={term} onChange={(e) => setTerm(e.target.value)} /> */}
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <List>
          {data.map((name) => (
            <li>{name}</li>
          ))}
        </List>
      )}
    </Container>
  );
};

export default RepositoriesList;
