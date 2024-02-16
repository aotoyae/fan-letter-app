import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "pages/Home";
import Member from "pages/Member";
import Detail from "pages/Detail";
import { useState } from "react";

export default function Router() {
  const [letters, setLetters] = useState([]);
  const [activeMember, setActiveMember] = useState("");

  return (
    <BrowserRouter>
      <Layout $activeMember={activeMember} $setActiveMember={setActiveMember}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
            letters={letters}
            setLetters={setLetters}
          />
          <Route
            path="/member/:id"
            element={
              <Member
                letters={letters}
                setLetters={setLetters}
                activeMember={activeMember}
                setActiveMember={setActiveMember}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Detail
                letters={letters}
                setLetters={setLetters}
                activeMember={activeMember}
                setActiveMember={setActiveMember}
              />
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
