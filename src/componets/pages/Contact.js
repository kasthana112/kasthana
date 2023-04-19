import React from 'react';
import ReactDOM from'react-dom';
function Contact() {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="please enter your name"></input>
                <label htmlFor="exampleFormControlInput2" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Please leave your message here...</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </div>
        </div>
    );
}


// ReactDOM.render(<App />, document.getElementById('root'));

export default Contact;
