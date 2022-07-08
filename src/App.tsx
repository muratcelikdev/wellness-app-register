import { ThemeProvider } from 'styled-components';

import StepperProvider from 'context/StepperProvider';
import Routes from 'routing/Routes';
import { colors } from 'theme/colors';

const App = () => {
  return (
    <ThemeProvider theme={{ colors }}>
      <StepperProvider>
        <Routes />
      </StepperProvider>
    </ThemeProvider>
  );
};

export default App;
