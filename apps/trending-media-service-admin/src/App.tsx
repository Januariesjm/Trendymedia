import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserVerificationList } from "./userVerification/UserVerificationList";
import { UserVerificationCreate } from "./userVerification/UserVerificationCreate";
import { UserVerificationEdit } from "./userVerification/UserVerificationEdit";
import { UserVerificationShow } from "./userVerification/UserVerificationShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"TrendingMediaService"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="Video"
            list={VideoList}
            edit={VideoEdit}
            create={VideoCreate}
            show={VideoShow}
          />
          <Resource
            name="Post"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            show={PostShow}
          />
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="UserVerification"
            list={UserVerificationList}
            edit={UserVerificationEdit}
            create={UserVerificationCreate}
            show={UserVerificationShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
