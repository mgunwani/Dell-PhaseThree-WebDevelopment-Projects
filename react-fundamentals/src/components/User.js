
export default function User(props) {
    let age = props.age ? props.age : "18";
    let amount = props.children ? props.children : "100";
    return (
        <div>
            <div>Name : {props.name} | Age: {age} | Amount : {amount}</div>
        </div>
    );

}