import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    videos: []
  };

  // onSearchSubmit = async (searchTerm) => {
  // //   const response = await [VIDEO].length([QUERY, {
  // search parameters
  // }]);
  // this.setState({ videos: Response.data.results });
  // }

  render() {
    return ( 
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    )
  }
}

export default App;