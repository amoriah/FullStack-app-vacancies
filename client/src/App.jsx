export const App = () => {
  return () => {
    window.addEventListener('beforeunload', localStorage.clear());
  };
};
