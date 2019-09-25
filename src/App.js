import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Button from'react-bootstrap/Button';
import {AddForm, HeaderBlock, PostItem} from "./components/component";

import "bootstrap/scss/bootstrap.scss";
//import s from "./styles/App.module.scss"
//import "bootstrap/scss/bootstrap.scss";


function App() {
    return (
        <div className="App">
            <HeaderBlock
                title="Заголовок"
                description="Описание"
                imageUrl="https://images.unsplash.com/photo-1564694245232-0a1ad9f3cd38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />

            <div className="container">
                <div className="content">
                    <Button variant="primary">Add post</Button>
                    <a href="/" className={`btn+ '' + btn-secondary`}> Remove </a>
                     <div className="content">
                        <div className="post-items">
                            <PostItem
                                _id="1"
                                title="Заголовок статьи"
                                createdAt={" " + new Date()}
                            />

                        </div>
                         <Router>
                             <div>
                                 <Switch>
                                     {/*<Route path="/" component={PostList} />
                                    <Route path="/post/:id" component={FullPost} />*
                                    <Route path="/not-found" component={NotFound} />*/}
                                 </Switch>
                             </div>
                         </Router>
                         <AddForm
                             title="Title"
                             enterTitlePost="Enter title you post"
                             imageURL="Image URL"
                             description="Description"

                         />
                    </div>
                </div>
            </div>

        </div>
    );
}


export default App;
