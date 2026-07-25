import ProductBuilder from "./components/ProductBuilder ";
import ReviewPanel from "./components/ReviewPanel";
import { BuilderProvider } from "./context/BuilderContext";

function App() {
  return (
    // grid-cols-[768px_399px]
    <div className="xl:mx-12 2xl:mx-28.25">
      <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_400px] xl:grid-cols-[768px_400px] 2xl:grid-cols-1 gap-3 mx-auto my-10">
        <BuilderProvider>
          <ProductBuilder />
          <ReviewPanel />
        </BuilderProvider>
      </div>
    </div>
  );
}

export default App;
