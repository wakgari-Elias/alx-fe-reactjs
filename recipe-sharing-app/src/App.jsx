import React from 'react';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
