import { createRouter, createWebHashHistory } from 'vue-router'

//import AboutPage from '../modules/pokemon/pages/AboutPage'
//import ListPage from '../modules/pokemon/pages/ListPage'
//import PokemonPage from '../modules/pokemon/pages/PokemonPage'

//import NoPagesFound from '../modules/shared/pages/NoPagesFound'

const routes = [
    { path: '/', 
    component: () => import(/* webpackChunkName: "ListPage" */'../modules/pokemon/pages/ListPage')
    },
    
    { path: '/about', 
    component: () => import(/* webpackChunkName: "AboutPage" */'../modules/pokemon/pages/AboutPage')
    },
    
    { path: '/id', 
    component: () => import(/* webpackChunkName: "PokemonPage" */'../modules/pokemon/pages/PokemonPage')
    },
    
    { path: '/:pathMatch(.*)*', 
    component: () => import(/* webpackChunkName: "NoPagesFound" */'../modules/shared/pages/NoPagesFound')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router