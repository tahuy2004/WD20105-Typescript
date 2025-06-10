import { Route, Routes } from "react-router";
import Home from "./components/Home";
import CoreType from "./components/CoreType";

import ClientLayout from "./Layouts/ClientLayout";
import ListsBooks from "./components/ListsBooks";
import AddBooks from "./components/AddBooks";
import UpdateBooks from "./components/UpdateBook";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/core-type" element={<CoreType />} />
          <Route path="/books" element={<ListsBooks />} />
          <Route path="/books/update/:id" element={<UpdateBooks />} />
          <Route path="/add-books" element={<AddBooks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
