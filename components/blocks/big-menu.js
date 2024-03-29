import { Collapse } from "react-bootstrap"
import circleNum from "../utils"
import { useState } from "react";

export default function BigMenu({pages}) {
    return(
        <div className="ms-2 me-auto h3 hidden-link">
            {pages?.map((page, idx) =>
            <div key={idx}>
                <BigMenuItem {...page}/>
            </div>) }
        </div>
    )
}


function BigMenuItem(page) {
    /*const [open, setOpen] = useState(false)*/
    // This should be a PageNav but we need some more custom code for the collapsing
    return (
        <div
            id={"page" + page.title} 
            className="row"
            /*aria-expanded={open}
            onMouseLeave={() => {
                if (open) {
                    setOpen(!open)
            }}}*/
        >
            <a href={"/" + page.slug} 
            className="display-2 font-monument hidden-link w-auto text-center"
            /*onMouseEnter={() => setOpen(!open)}*/
            >
                <div className="float-start me-3">
                    {circleNum(page.pageNumber)}
                </div>
                <div className="float-start">
                    {page.title}
                </div>
            </a>
            {/*<Collapse in={open}>
            <div id={"pagenav-" + page.pageNumber + "-blocks"}>
                {page.blocks?.map((section) => 
                    <div className="pl-2" key={section.id}>
                        <a href={page.slug + "#" + section.name}>{section.name}</a>
                    </div>)}
            </div>
                </Collapse>*/ }                   
        </div>
    )
}
