import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Profile extends React.Component {
  render () {
    return(
      <div>
        Hello
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);
