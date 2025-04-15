import { Suspense } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="text-xl font-medium">
        {/* ________write your code below____________  */}
        <Suspense fallback={<h3>bottles are loading...</h3>}>
          <h1>Hello Forhad</h1>
        </Suspense>
      </div>
    </>
  );
}

export default App;
