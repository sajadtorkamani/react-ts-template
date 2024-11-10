import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'

import Root from '../components/Root'
import About from '../routes/About'
import Home from '../routes/Home'
import { ROUTES } from './constants'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.home} index element={<Home />} />
      <Route path={ROUTES.about} element={<About />} />

      <Route path="*" element={<Navigate to={ROUTES.home} />} />
    </Route>,
  ),
)
