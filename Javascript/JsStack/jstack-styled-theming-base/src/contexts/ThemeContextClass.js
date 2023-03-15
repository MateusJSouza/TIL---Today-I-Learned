import React from 'react';

export class ThemeProvider extends React.Component {
  state = {
    theme: 'dark',
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
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
