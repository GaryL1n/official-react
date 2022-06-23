function Trainbox(props) {
    const { img } = props;
    return (
        <li>
            <img src={img} alt="" />
        </li>
    );
}

export default Trainbox;