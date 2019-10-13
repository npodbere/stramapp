import React from 'react'
import {Router, Route} from 'react-router-dom'

import StreamCreate from './StreamCreate'
import StreamEdit from './StreamEdit'
import StreamList from './StreamList'
import StreamShow from './StreamShow'
import Navbar from './navbar'
import history from '../history'

const App = () => {

        return (
            <Router history={history}>
                <Navbar />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" component={StreamCreate} />
                <Route path="/streams/edit/:id" component={StreamEdit} />
                <Route path="/streams/show" component={StreamShow} />
            </Router>
        )
}
export default App


