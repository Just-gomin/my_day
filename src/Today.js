import React from "react";
import "./Today.css";

class Today extends React.Component {
  state = {
    date: new Date()
  };

  update = () => {
    this.setState({
      date: new Date()
    });
  };

  componentDidMount() {
    setInterval(this.update, 1000);
  }

  render() {
    const year = this.state.date.getFullYear();
    const month = this.state.date.getMonth() + 1;
    const day = this.state.date.getDate();

    return (
      <div className="todayDate">
        {year}.{month < 10 ? `0` + month : month}.{day < 10 ? "0" + day : day}
      </div>
    );
  }
}

export default Today;
