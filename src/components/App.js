import { Component } from 'react'
import { ProjectList } from './ProjectList'
import { ProjectView } from './ProjectView'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: ['some project', 'some other project', 'some other project project thing']
    }
  }
  render () {
    return (
      <div className="app">
        <ProjectList projects={['some project', 'some other project', 'some other project project thing']}/>
        <ProjectView projects={['some project', 'some other project', 'some other project project thing']}/>
      </div>
    )
  }
}
