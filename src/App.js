import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const newUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: newUserDetailsList,
  }

  onChangeInputValue = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filterUserList = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )

    this.setState({
      userDetailsList: filterUserList,
    })
  }

  render() {
    const {searchInput, userDetailsList} = this.state

    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeInputValue}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              deleteUser={this.onDeleteUser}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
