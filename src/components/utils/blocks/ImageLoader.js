function ImageLoader({w, h, src, round = 0, ...props}) {
    return (
        <div {...props}>
            <img style={{width: w, height: h, borderRadius: round}} src={src}>
            </img>
        </div>
    );
}

export default ImageLoader