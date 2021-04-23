document.addEventListener("DOMContentLoaded", (e) => {

    const components = document.querySelectorAll(".component");
    const canvas = document.querySelector(".myCanvas");

    var componentListOnCanvas = [];

    const updateCanvas = () => {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var xPos = 20;
        var yPos = 20;
        for (const ele of componentListOnCanvas) {
            console.log(ele.innerHTML);
            ctx.beginPath();
            ctx.rect(xPos, yPos, 30, 30);
            ctx.stroke();
            ctx.fillText(ele.innerHTML, xPos + 5, yPos + 15)
            xPos += 40;
            // yPos += 50
        }
    };
    const componentClicked = (c) => {
        componentListOnCanvas.push(c.cloneNode(true));
        updateCanvas();
    }

    for (const c of components) {
        c.addEventListener("click", () => { componentClicked(c); }, );
    }

})