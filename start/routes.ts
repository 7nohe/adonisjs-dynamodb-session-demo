/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from './kernel.js'
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home', { version: 6 }).use([middleware.auth()])

const UsersSessionController = () => import('#controllers/users/session_controller')

router.get('login', [UsersSessionController, 'create'])
router.post('login', [UsersSessionController, 'store'])
router.post('logout', [UsersSessionController, 'destroy']).use(middleware.auth())
