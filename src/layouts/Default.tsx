import { Outlet } from "react-router-dom";
import { Top } from "../components/Top";

import { Layout } from './styles';

export function Default() {
  return (
    <>
      <Top />
      <Layout>

        <div className="content">
          <Outlet />
        </div>
      </Layout>
    </>
  )
}