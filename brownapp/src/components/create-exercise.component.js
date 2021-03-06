import React, { Component } from "react";



export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            data: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ["test user"],
            username: 'test user'

        });

    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }



    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });

    }



    onChangeDuration(e) {
        this.setState({
            duration: e.target.value

        });
    }


    onChangeDate(date) {
        this.setState({
            date: date

        });
    }


    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        window.location = "/";
    }








    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>UserName : </label>
                        <select ref="userInput" required className="form-control" value={this.state.username} onchange={this.onChangeUsername}>
                            {this.state.users.map(function (user) {
                                return <option key={user} value={user}>{user}</option>
                            })
                            }
                        </select>

                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type='text' required className="form-control" value={this.state.duration} onChange={this.onChangeDuration}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Create Log" class="btn btn-primary"/>
                   </div>

                </form>
            </div>

        )
    }
}