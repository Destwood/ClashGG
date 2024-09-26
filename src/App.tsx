import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from 'shared/modules/Header/Header';
import { getTheme } from 'shared/theme/themes';
import { Themes } from 'utils/enums';
import 'i18n';
import Sidebar from "./shared/modules/Sidebar/Sidebar";
import './App.scss';

const App = () => {
	const [themeMode, setThemeMode] = useState<Themes>(Themes.dark);
	const theme = createTheme(getTheme(themeMode));

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div className="App">
					<Header />

                    <main>
                        <Sidebar/>
                        <Routes>
                            <Route path="/" element="" />
                        </Routes>
                    </main>

				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
