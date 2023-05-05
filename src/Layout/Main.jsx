import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import ScrolltoTop from "../Components/ScrolltoTop";

function Main() {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <div>
        {navigation.state === "loading" && (
          <div className="text-center mt-10">
            <p className="mb-4">Loading..</p>
            <progress className="progress w-56"></progress>
          </div>
        )}
      </div>

      <Outlet />

      <Footer />
    </div>
  );
}

export default Main;
