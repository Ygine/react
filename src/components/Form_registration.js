import React, {Component} from 'react';
import { Button } from 'reactstrap';

const styles = {display: 'flex', flexDirection: 'column'};

class SignUpForm extends Component {
  state = { FirstName: '', Surname: '', Email: '' };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ FirstName: '', Surname: '', Email: '' });
  };

  render() {
    const { FirstName, Surname, Email } = this.state;

    return (
      <form style={styles} onSubmit={this.handleSubmit}>
        <label htmlFor="">FirstName
          <input
            name="FirstName"
            value={FirstName}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="">Surname
          <input
            name="Surname"
            value={Surname}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="">Email
          <input
            name="Email"
            value={Email}
            onChange={this.handleChange}
          />
        </label>
        <Button color="primary" type="submit">Add Post</Button>
      </form>
    );
  }
}

export  default  SignUpForm;