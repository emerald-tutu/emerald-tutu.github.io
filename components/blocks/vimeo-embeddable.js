export default function VimeoEmbeddable({videoID, iframeSrc}) {
    console.log(iframeSrc)
    // Adapted from Vimeo's embedding code
    return (
        <div id={"player-" + videoID} className="mb-3 container">
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
                <iframe src={"" + iframeSrc} 
                        style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen>     
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        
    )
}