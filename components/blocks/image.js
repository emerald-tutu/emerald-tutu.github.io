export default function Image({image, altText, caption}) {
    return (
    <div className="m-auto"
        style={maxWidth && {"max-width": maxWidth + "px"}}>
        {idx === active && (
            <img className="mw-100" 
                src={image.url}
                alt={altText}
            />
        )}
        {caption && <span className="text-green h6">{img.caption}</span>}
    </div>
    )
   
}