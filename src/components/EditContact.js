import React from "react";


class EditContact extends React.Component {

   constructor(props) {
    super(props);
    const{id, name, email} = props.location.state.contact;
    this.state = {
        id,
        name,
        email,
    }
   }

    update = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "") {
            alert("All fields required");
        }
        else {
            this.props.updatecontactHandler(this.state);
            this.setState({ name: "", email: "" });
            this.props.history.push("/");
        }

    }

    render() {
        return (

            <>
                <div className="ui main">
                    <h2 style={{ textAlign: "center", marginTop: 80 }}>Edit Contact</h2>
                    <form className="ui form" onSubmit={this.update}>
                        <div className="field">
                            <label>Name:</label>
                            <input type="text"
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })} />
                            <label>Email:</label>
                            <input type="text"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })} />
                            <button className="ui button blue" type="submit" name="submit" style={{ marginTop: 10 }}>Update</button>
                        </div>
                    </form>
                </div>

            </>
        );
    }
}

export default EditContact;