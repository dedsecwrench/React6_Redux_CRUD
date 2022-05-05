import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './Routing/Header';
import Home from './Routing/Home';
import PageNotFound from './Routing/PageNotFound';
import Student from './Routing/Student';
import Contact from './Routing/Contact';
import AddStudent from './Routing/AddStudent';
import Update from './Routing/Update';
import {Provider} from 'react-redux'
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Router>
            <Header/>
                <Routes>
                  <Route path='/' element={<Navigate to='/Home' />}  />
                  <Route path='/home' element={<Home/>}  />
                  <Route path='/student' element={<Student/>}  />
                  <Route path='/student/addStudent' element={<AddStudent/>}  />
                  <Route path='/student/update/:id' element={<Update/>}  />
                  <Route path='/contact' element={<Contact/>}  />
                  <Route path='/*' element={<PageNotFound/>}  />
                </Routes>
        </Router>
    </div>
    </Provider>
  );
}

export default App;
