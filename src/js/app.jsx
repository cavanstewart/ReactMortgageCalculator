import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: "",
      rate: "",
      term: "15",
      output: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  calculate(s) {
    //console.log(s.balance)
    const p = Number(s.balance);
    const r = Number(s.rate) / 1200;
    const n = Number(s.term) * 12;
    console.log(`${p} ${r} ${n}`);

    const monthlyPayments = (p * r / (1 - (Math.pow(1/(1 + r), n)))).toFixed(2);
    this.setState({
      output: `$${monthlyPayments} is your monthly payment.`
    });
  }

  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <h3>Mortgage Calculator</h3>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="balance" className="col-sm-2 control-label">
              Balance
            </label>
            <div className="col-sm-10">
              <input
                value={this.state.balance}
                onChange={this.handleChange}
                type="number"
                className="form-control"
                id="balance"
                name="balance"
                placeholder="Enter Balance"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="rate" className="col-sm-2 control-label">
              Yearly Rate
            </label>
            <div className="col-sm-10">
              <input
                value={this.state.rate}
                onChange={this.handleChange}
                type="number"
                step="0.1"
                className="form-control"
                id="rate"
                name="rate"
                placeholder="Enter Yearly Rate"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <select
                name="term (years)"
                value={this.state.term}
                onChange={this.handleChange}
              >
                <option>15</option>
                <option>30</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                name="submit"
                type="button"
                className="btn btn-default"
                onClick={() => this.calculate(this.state)}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="form-group">
            <div
              className="col-sm-offset-2 col-sm-10"
              name="output"
              id="output"
            >
              {this.state.output}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
