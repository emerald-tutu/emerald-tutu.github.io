// TODO: markdown elements
export default function Text({paragraphs, isBlueBackground}) {
    return (
        <div className="text w-auto">
            {paragraphs.map((paragraph, idx) => {
                return (
                <div key={idx} className="justify-content-center">
                    <p className={"py-3" + (isBlueBackground ? " blue-bg" : "")}>{paragraph}</p>
                </div>
                )
            })}
        </div>
    )
}
