import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { collections } from "./collections";
import { Suspense } from "react";
import AboutPage from "./pages/about";
import PrivacyPolicyPage from "./pages/privacy-policy";
import MainPage from "./pages/main";
import CollectionPage from "./pages/collection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="политика-конфиденциальности"
          element={
            <Suspense>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          index
          element={
            <Suspense>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense>
              <AboutPage />
            </Suspense>
          }
        />
        {collections.map((collection) => (
          <Route
            path={collection.title}
            key={collection.title}
            element={
              <Suspense>
                <CollectionPage
                  cards={collection.cards}
                  title={collection.title}
                  content={collection.content}
                />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
