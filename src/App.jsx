import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import CartContextProvider from "./store/cartContext";

export default function App() {
  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <CartContextProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </CartContextProvider>
      </ErrorBoundary>
    </>
  );
}
