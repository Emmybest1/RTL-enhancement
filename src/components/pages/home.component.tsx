import React, {useState} from 'react';
import {useUniqueId} from '../../hooks/use-uniqueid.hooks';
import Input from '../partials/input/input.component';

const Home: React.FC = (): JSX.Element => {
  const [searchedUserName, setSearchedUserName] = useState<string>('');
  const [searchId] = useUniqueId(1);

  const OnChangeHandler = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    stateDispatcher: React.Dispatch<React.SetStateAction<string>> | Function
  ) => {
    stateDispatcher(ev.target.value);
  };
  return (
    <main>
      <div className="home-container">
        <section>
          <h3>Inputs Below</h3>
          <Input
            id={searchId}
            type="search"
            placeholder="Search user"
            value={searchedUserName}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => OnChangeHandler(ev, setSearchedUserName)}
          />

          {!!searchedUserName && <p>You typed: {searchedUserName}</p>}
        </section>
      </div>
    </main>
  );
};

export default Home;
