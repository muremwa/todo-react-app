import React, { Component } from 'react';


class Brand extends Component {
    render () {
        return (
            <div>
                <a className="navbar-brand" href="#">TO DO.com</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        );
    };
};


class NavBarLink extends Component {
    disable (disabled) {
        let disabledName;
        if (disabled) {
            disabledName = "disabled";
        } else {
            disabledName = "";
        }
        
        return disabledName;
    }
    
    render () {
        const dis = this.disable(this.props.disabled);
        return (
            <li className="nav-item">
                <a className={"nav-link "+dis} href="">{this.props.linkName}</a>
            </li>
        )
    }
}

class NavBarLinkDropDown extends Component {
    render () {
        return (
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.props.linkName}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Calender</a>
                <a className="dropdown-item" href="#">Timer</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Conduct</a>
              </div>
          </li>
        )
    }
}

class NavBarLinkArea extends Component {
    render () {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavBarLink disabled={false} linkName="Home"/>
                    <NavBarLink disabled={true} linkName="Blog"/>
                    <NavBarLink disabled={true} linkName="Music"/>
                    <NavBarLinkDropDown linkName="more"/>
                </ul>
            </div>
        )
    }
}


class NavBar extends Component {
    render () {
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Brand />
                <NavBarLinkArea />
            </nav>
        )
    }
}

export default NavBar;