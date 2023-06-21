function Button(props: any) {
    return (<button className="p-2 hover:border rounded-md bg-white">
        {props.text}
    </button>
    );
}

export default Button;