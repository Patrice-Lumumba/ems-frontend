import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <a href="https://www.google.com" className="navbar-brand">Employee Management System</a>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;