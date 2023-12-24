import { RouterProvider } from 'react-router-dom';
import router from './Router/index'
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

const App = ()=>{
    return (
        <RouterProvider router={router} />
    )
}

export default App;