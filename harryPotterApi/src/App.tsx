import { Provider as ReduxProvider } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

export function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <AppRoutes />
      </ReduxProvider>
    </>
  );
}
