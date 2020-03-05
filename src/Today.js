import React from "react";

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
    const day = this.state.date.getDay() + 1;
    const hour = this.state.date.getHours();
    const minute = this.state.date.getMinutes();
    const second = this.state.date.getSeconds();

    return (
      <div className="todayDate">
        {year}.{month < 10 ? `0` + month : month}.{day < 10 ? "0" + day : day}
        <br />
        {hour < 10 ? "0" + hour : hour}:{minute < 10 ? "0" + minute : minute}:
        {second < 10 ? "0" + second : second}
      </div>
    );
  }
}

export default Today;
