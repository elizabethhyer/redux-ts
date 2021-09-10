import React, { useState } from "react";
import { useSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 80vw;
`;

const SearchInput = styled.input`
  width: 50%;
  height: 2rem;
  border-radius: 10px;
  border: 1px solid grey;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`;

const ListOutput = styled.div`
  padding: 3rem;
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
        <SearchInput
          placeholder="Search..."
          value={term}
          type="search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      <ListOutput>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && (
          <List>
            {data.length
              ? data.map((name) => <li>{name}</li>)
              : "Sorry, we didn't find any packages matching your search. Please try again."}
          </List>
        )}
      </ListOutput>
    </Container>
  );
};

export default RepositoriesList;
