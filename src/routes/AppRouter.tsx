import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from "../Components/TanStack/Home"
import TanStackfile from '../Components/TanStack/TanStackfile'
import RegularFetch from '../Components/TanStack/RegularFetch'
import ReactQueryfetch from '../Components/TanStack/ReactQueryfetch'
import ReactQueryfetchbyclick from '../Components/TanStack/Reactqueryfetechbyclick'
import ReactQuerybyid from '../Components/TanStack/Reactquerybyid'
import Paginationqueries from '../Components/TanStack/Paginationqueries'
import InfinateQueries from '../Components/TanStack/InfinateQueries'
import InfinateQueryScroll from '../Components/TanStack/InfinateQueryScroll'
import UseQueriesDemo from '../Components/TanStack/UseQueriesDemo'
// import Operators from '../Components/Others/Operators'
// import Localstorage from '../Components/LocalStorage/LocalStorage'


function AppRouter() {
    return (
        <BrowserRouter>
            <div className='flex bg-gray-500 h-15 items-center justify-center gap-5 mb-5' >
                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/home"
                >
                    Home
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/tanstack"
                >
                    TanStack
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/regularfetch"
                >
                    RegularFetch
                </NavLink>

                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/reactqueryfetch"
                >
                    ReactQueryfetch
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/reactclick"
                >
                    ReactQueryfetchbyclick
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/pagination"
                >
                    Paginationqueries
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/infinite"
                >
                    Infinite
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/infinitescroll"
                >
                    Infinite Scroll
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/usequeriesdemo"
                >
                    UseQueriesDemo
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/operators"
                >
                    Operators
                </NavLink>
                {/* <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/localstorage"
                >
                    LocalStorage
                </NavLink> */}
                {/* <NavLink
                    className={({ isActive }) =>
                        `text-lg font-bold ${isActive
                            ? "text-white bg-gray-400/50 rounded-lg py-1 px-2"
                            : "text-white hover:text-blue-700"
                        }`
                    }
                    to="/reactbyid"
                >
                    ReactQuerybyid
                </NavLink> */}
            </div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/tanstack' element={<TanStackfile />} />
                <Route path='/regularfetch' element={<RegularFetch />} />
                <Route path='/reactqueryfetch' element={<ReactQueryfetch />} />
                <Route path='/reactqueryfetch/:postid' element={<ReactQuerybyid />} />
                <Route path='/reactclick' element={<ReactQueryfetchbyclick />} />
                <Route path='/pagination' element={<Paginationqueries />} />
                <Route path='/infinite' element={<InfinateQueries />} />
                <Route path='*' element={<TanStackfile />} />
                <Route path='infinitescroll' element={<InfinateQueryScroll />} />
                <Route path='usequeriesdemo' element={<UseQueriesDemo />} />
                {/* <Route path='operators' element={<Operators />} /> */}
                {/* <Route path='localstorage' element={<Localstorage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}



export default AppRouter