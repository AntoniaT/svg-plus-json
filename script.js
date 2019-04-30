window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG(){
    console.log("Load the SVG");

    fetch("timeline-mockup2.svg")
    .then( response => response.text())
    .then(svgdata => {
      //  console.log("The SVG data is:");
       // console.log( svgdata);

    //    document.querySelector("#svg_timeline").innerHTML = svgdata;
        document.querySelector("#svg_timeline").insertAdjacentHTML("afterbegin", svgdata);
        
        const svgplaceholders = document.querySelectorAll(".svgplaceholder");

        svgplaceholders.forEach(replaceSVGwithHTML );


        fitRectangle("#prisoner .HTML_placeholder", "#movie_1");
        fitRectangle("#chamber .HTML_placeholder", "#movie_2");
        fitRectangle("#philosopher .HTML_placeholder", "#movie_3");

    })
}
function replaceSVGwithHTML( htmlElement){
    // We got an HTMLElement with data-svggplaceholder

    // we need to find the matching SVG element
    const svgId = htmlElement.dataset.svgplaceholder;
    const svgSelector = "#" + svgId +" .HTML_placeholder";
    
    console.log( htmlElement);
    const svgElement = document.querySelector(svgSelector);

    fitRectangle(svgElement, htmlElement);
}
function fitRectangle(svgElement, htmlElement){
    svgElement = document.querySelector(svgElement);
    htmlElement = document.querySelector(htmlElement);
   
    console.log(htmlElement);
    console.log(svgElement);

    htmlElement.style.left = svgElement.getAttribute("x") + "px";
    htmlElement.style.top = svgElement.getAttribute("y") + "px";
    htmlElement.style.width = svgElement.getAttribute("width") + "px";
    htmlElement.style.height = svgElement.getAttribute("height") + "px";

}