import { Component } from "react";

interface Props {
    name: string;
    age: number;
}

class Header extends Component<Props> {
    render() {

        return (
            <>
                <h1>Hello { this.props.name }! You are { this.props.age } years old!</h1>
            </>
        )
    }
}

export default Header;