import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import UserView from "./pages/user";
import ChatView from "./pages/chat";
import Layout from "./layout/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<UserView />} />
        <Route path="/chatview" element={<ChatView />} />
      </Routes>
    </Layout>
  );
}

export default App;
