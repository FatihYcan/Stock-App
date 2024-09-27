import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
// import "./App.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
