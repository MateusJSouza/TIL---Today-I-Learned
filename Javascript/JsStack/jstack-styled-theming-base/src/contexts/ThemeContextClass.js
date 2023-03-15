import React, { createContext } from 'react';

export const ThemeContextClass = createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let theme = 'dark';

    try {
      theme = JSON.parse(localStorage.getItem('theme'));
    } catch (error) {
      console.log(error);
    }

    this.state = {
      theme,
    }
  }

  // Monitorando alterações de state ou props
  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    }
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }), () => {
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    });
  }

  render() {
    return (
      <ThemeContextClass.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme
        }}
      >
        {this.props.children}
      </ThemeContextClass.Provider>
    )
  }
}

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('dark');

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
//   }

//   return (
//     <ThemeContextClass.Provider value={{ theme, handleToggleTheme }}>
//       {children}
//     </ThemeContextClass.Provider>
//   )
// }
