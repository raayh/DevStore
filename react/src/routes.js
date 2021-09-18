import {BrowserRouter, Switch, Route} from 'react-router-dom'

import DevStore from './pages/devstore'
import error from './pages/error'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={DevStore} />
                <Route path="*" component={error} />
            </Switch>
        </BrowserRouter>
    )
} 
