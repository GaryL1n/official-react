function ClickPhoto(props) {
    const { Photo, handleClick } = props;

    return (
        <div className="img-row">
            <img src={Photo} alt="" className="w-100" onClick={handleClick} />
        </div>
    );
}

export default ClickPhoto;
