import { Tabs } from "antd";
import FormSignUp from "../../components/AdminComponents/Login/FormSignUp";
import FormSignIn from "../../components/AdminComponents/Login/FormSignIn";
import './Login.scss';

const { TabPane } = Tabs;

export default function nn() {
  return (
 
        <div className="container">
          <Tabs className="tab" defaultActiveKey="1">
            <TabPane className = "tab__option"tab="Iniciar Sesión" key="1">
              <FormSignIn />
            </TabPane>
            <TabPane className = "tab__option"tab="Registrarme" key="2">
              <FormSignUp />
            </TabPane>
          </Tabs>
        </div >
  );
}
