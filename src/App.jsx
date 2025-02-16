import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import CardsContextProvider from "./store/cardsContext";

export default function App() {
  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <CardsContextProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </CardsContextProvider>
      </ErrorBoundary>
    </>
  );
}
