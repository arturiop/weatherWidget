import React, { FC } from 'react';
import { HashRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './config/store';
import { MainContainer } from './components/MainContainer';
import { WeatherWidgets } from './components/pages/weatherWidgets';

export const App: FC = () => (
  <MainContainer>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/weather-widgets" />} />
      <Route path="/weather-widgets" render={() => <WeatherWidgets />} />
    </Switch>
  </MainContainer>
);

export const MainApp: FC = () => (
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
