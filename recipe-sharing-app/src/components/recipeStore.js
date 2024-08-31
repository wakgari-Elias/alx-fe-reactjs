import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set(state => {
    const newSearchTerm = term;
    return {
      searchTerm: newSearchTerm,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(newSearchTerm.toLowerCase())
      )
    };
  }),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;
