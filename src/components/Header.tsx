type Person = {
    name: string;
    age: number;
}

function Header({ name, age }: Person) {

    return (
        <>
            <h1>Hello { name }! You are { age } years old!</h1>
        </>
    )
}

export default Header;