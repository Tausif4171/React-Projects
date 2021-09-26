import React from "react";


class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    };
    add = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "") {
            alert("All fields required");
        }
        else {
            this.props.addcontactHandler(this.state);
            this.setState({ name: "", email: "" });
            // console.log(this.state);
        }

    }

    render() {
        return (

            <>
                <div className="ui main">
                    <h2 style={{ textAlign: "center", marginTop: 80 }}>Add Contact</h2>
                    <form className="ui form" onSubmit={this.add}>
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
                            <button className="ui button blue" type="submit" name="submit" style={{ marginTop: 10 }}>Add</button>
                        </div>
                    </form>
                </div>

            </>
        );
    }
}

export default AddContact;