import React from 'react';

import { Link } from '@reach/router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/list">GO TO LIST</Link>
      </div>
    );
  }
}
export default Home;
