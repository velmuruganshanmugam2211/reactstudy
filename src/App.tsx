import './App.css'
// import UseEffecthook from './Components/Dropdown/hooks/useEffecthook'
// import UseRefhook from './Components/Dropdown/hooks/useRefhook'
// import UseStatehook from './Components/Dropdown/hooks/useStatehook'
// import Userefusestate from './Components/Dropdown/hooks/userefusestate'
// import UseEffecthook from './Components/Dropdown/hooks/useContexhook'
// import PropsHook from './Components/Dropdown/hooks/props/propshook'
// import UseReducerHook from './Components/Dropdown/hooks/useReducerhook'
// import UseMemohook from './Components/Dropdown/hooks/useMemohook'
// import UseCallbackhook from './Components/Dropdown/hooks/useCallbackhook'
// import UseParamshook from './Components/Dropdown/hooks/useParamshook'
// import Customhook from './Components/Dropdown/hooks/Customhook'
// import CustomerAdd from './Components/redux/customerAdd'
// import CustomerView from './Components/redux/customerView'
// import Tanstack from './Components/TanStack/TanStackfile'
import { Provider } from 'react-redux'
import { store } from './store'
// import Counteradd from './Components/redux/counteradd'
import AppRouter from './routes/AppRouter'


function App() {

  return (
    <>
    <AppRouter />
    <Provider store={store}>
    <div className="flex items-center justify-center flex-col  m-10 ">
      {/* <UseEffecthook /> */}
      {/* <UseRefhook />
      <UseStatehook /> */}
      {/* <Userefusestate /> */}
      {/* <UseEffecthook /> */}
      {/* <PropsHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseMemohook /> */}
      {/* <UseCallbackhook /> */}
      {/* <UseParamshook /> */}
      {/* <Customhook /> */}
      {/* <h1 className='text-black font-bold text-2xl'>React Redux Customer Example</h1> */}
      {/* <CustomerAdd /> */}
      {/* <CustomerView  /> */}
      {/* <Counteradd /> */}
      {/* <Tanstack /> */}
    </div>
    </Provider>
    </>
  )
}

export default App
