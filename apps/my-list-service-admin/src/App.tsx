import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MovieList } from "./movie/MovieList";
import { MovieCreate } from "./movie/MovieCreate";
import { MovieEdit } from "./movie/MovieEdit";
import { MovieShow } from "./movie/MovieShow";
import { TvShowList } from "./tvShow/TvShowList";
import { TvShowCreate } from "./tvShow/TvShowCreate";
import { TvShowEdit } from "./tvShow/TvShowEdit";
import { TvShowShow } from "./tvShow/TvShowShow";
import { MyListList } from "./myList/MyListList";
import { MyListCreate } from "./myList/MyListCreate";
import { MyListEdit } from "./myList/MyListEdit";
import { MyListShow } from "./myList/MyListShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MyListService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Movie"
          list={MovieList}
          edit={MovieEdit}
          create={MovieCreate}
          show={MovieShow}
        />
        <Resource
          name="TvShow"
          list={TvShowList}
          edit={TvShowEdit}
          create={TvShowCreate}
          show={TvShowShow}
        />
        <Resource
          name="MyList"
          list={MyListList}
          edit={MyListEdit}
          create={MyListCreate}
          show={MyListShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
