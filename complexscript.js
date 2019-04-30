window.addEventListener("DOMContentLoaded", loadSVG);

let parent = document.querySelector("#svg_timeline");

function loadJSON(){
    fetch("data.json")
    .then( response => response.json())
    .then (myJSON => {
        console.log("JSON is loaded");
        myJSON.forEach ( obj =>{
            console.log(obj);
            // clone the template
            let template = document.querySelector("#movie_template")
            let clone = template.cloneNode(true).content;
            // put the data in the clone
            clone dataFields = clone.querySelectorAll("[data-field]");
            dataFields.forEach( element =>{
                console.log(element);
                const property = element.dataset.field;
                console.log(field);
            // if element is an img, set the .src to obj[property], else set the textContent
            if(element.tagName === "IMG"){
                element.erc = obj[probperty];
            }else{
                element.textContent = obj[property];
            }
            });

/* 
            clone.querySelector("[data-field=title]").textContent = obj.title;
            clone.querySelector("[data-field=image]").src = obj.image + ".jpg";
            clone.querySelector("[data-field=year]").textContent = obj.year;
            clone.querySelector("[data-field=director]").textContent = obj.director;
 */
            // append the clone to ...
            document
            .querySelector("[data-svgplaceholder='" + obj.id + "']")
            .appendChild(clone);
        })
    })
}
loadJSON();
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

        svgplaceholders.forEach(replaceSVGwithHTML);


/*         fitRectangle("#prisoner .HTML_placeholder", "#movie_1");
        fitRectangle("#chamber .HTML_placeholder", "#movie_2");
        fitRectangle("#philosopher .HTML_placeholder", "#movie_3"); */
        calulateSizes();


    })
}

function calulateSizes() {
    const svgPlaceholder = document.querySelectorAll(".svgplaceholder");
    console.log(svgPlaceholder);
    svgPlaceholder.forEach(repalceSVGwithHTML);
  }
  function replaceSVGwithHTML(htmlElement) {
    //we got an HTMLelement with dta-svgplaceholder
    //We need to find matching SVG element
    // console.log(svgPlaceholder);
    const svgId = htmlElement.dataset.svgplaceholder;
    const svgSelector = "#" + svgId + " .HTML_placeholder";
    console.log(svgId);
    console.log(htmlElement);
    const svgElement = document.querySelector(svgSelector);
    fitRetangule(svgElement, htmlElement);
  }
  function fitRetangule(svgElement, htmlElement) {
    const rect = svgElement.getBoundingClientRect();
    // htmlElement.style.left = svgElement.getAttribute("x") + "px";
    // htmlElement.style.top = svgElement.getAttribute("y") + "px";
    // htmlElement.style.width = svgElement.getAttribute("width") + "px";
    // htmlElement.style.height = svgElement.getAttribute("height") + "px";
    htmlElement.style.left = rect.x + "px";
    htmlElement.style.top = rect.y + "px";
    htmlElement.style.width = rect.width + "px";
    htmlElement.style.height = rect.height + "px";
  }