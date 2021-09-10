import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const AppContainer = styled.div`
  padding: 6rem;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <Provider store={store}>
      <a href="https://github.com/elizabethhyer/redux-ts">View me on Github</a>
      <AppContainer>
        <div>
          <h1>Search for a package</h1>
          <RepositoriesList />
        </div>
      </AppContainer>
    </Provider>
  );
};

export default App;
