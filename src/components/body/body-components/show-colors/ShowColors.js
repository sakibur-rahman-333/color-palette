import React, { Component } from "react";
import "./ShowColors.css";
import { Link } from "react-router-dom";

class ShowColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: null,
    };
  }
  handleCopyButton = (item) => {
    navigator.clipboard.writeText(item.value);
    this.setState({
      isCopied: true,
    });
    alert("Copied!");
  };

  handleDeleteButton = (item) => {
    console.log(item);
    alert("This item will be deleted! Are you sure?");
    localStorage.removeItem(item.id);
    let localColors = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localColors[i] = { id: key, value: value };
    }
    this.setState({
      colors: localColors,
    });
  };

  componentDidMount() {
    let localColors = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localColors[i] = { id: key, value: value };
    }
    this.setState({
      colors: localColors,
    });
  }

  render() {
    const color = this.state.colors;
    const showColor =
      color !== null
        ? color.map((item) => {
            return (
              <div
                className="color-div"
                key={item.id}
                style={{
                  backgroundColor: item.value,
                }}
              >
                <h4 className="color-code">{item.value}</h4>
                <div className="function-icon">
                  <div className="function-icons">
                    <button
                      className="function-icon-btn"
                      title="Copy"
                      onClick={() => this.handleCopyButton(item)}
                    >
                      <i className="fa-solid fa-copy"></i>
                    </button>
                    <Link to="/edit-color">
                      <button className="function-icon-btn" title="Edit">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>

                    <button
                      className="function-icon-btn"
                      title="Delete"
                      onClick={() => this.handleDeleteButton(item)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null;

    return (
      <div className="show-card">
        {showColor}
        <Link to="/create-color">
          <button className="add resize" title="Add more">
            <i className="fa-solid fa-plus add-icon"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default ShowColors;
