export default function Image({image, altText, caption}) {
    return (
        <div>
            <img className="mw-100" 
                src={image.url}
                alt={altText}
            />
            {caption && <span className="text-green text-center h6">{caption}</span>}
        </div>
    )
}