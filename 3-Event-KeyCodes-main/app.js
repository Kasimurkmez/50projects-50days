const insert = document.getElementById("write");

window.addEventListener("keydown", (event) => {


  insert.innerHTML = `
        <div class="key">
            ${event.key === " " ? "Space" : event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
        <small>event.keyCode</small>
        </div>
        <div class="key">
            ${event.code}
        <span>event.code</span>
        </div>
        <div class="key">
            ${event.timeStamp}
        <span>event.timeStamp</span>
        </div>
    `;
});
