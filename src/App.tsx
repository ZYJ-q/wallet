// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import Locales from 'components/Locales';
// import RTLLayout from 'components/RTLLayout';
import ScrollTop from 'components/ScrollTop';
import Snackbar from 'components/@extended/Snackbar';
import Notistack from 'components/third-party/Notistack';

// auth-provider
// import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
// import Product from 'pages/product';
import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';
import { WalletContextProvider } from 'contexts/wallet';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    {/* <RTLLayout> */}
    <Locales>
      <WalletContextProvider>
        <ScrollTop>
          <AuthProvider>
            <>
              <Notistack>
                <Routes />
                <Snackbar />
                {/* <Product /> */}
              </Notistack>
            </>
          </AuthProvider>
        </ScrollTop>
      </WalletContextProvider>
    </Locales>
    {/* </RTLLayout> */}
  </ThemeCustomization>
);

export default App;
