function NotFound(props) {
    return (
        <div className={`not-found${props.width}`}>
            <h1>{props.content?props.content:'404 - Không tìm thấy trang web!!'}</h1>
        </div>
    );
}

export default NotFound;