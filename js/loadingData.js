// window.addEventListener("DOMContentLoaded", async () => {

function appendDataToHtml(data) {
    document.querySelectorAll("header > .header_info")[0]
        .innerHTML = data.header.info

    document.querySelectorAll(".container_hero")[0]
        .innerHTML = data.hero.html;

    document.querySelectorAll(".container_content_li_right_a")
        .forEach((ele, index) => {
            ele.innerHTML = data.content[index].aContent;
        })
    document.querySelectorAll(".container_content_li_right_p")
        .forEach((ele, index) => {
            ele.innerHTML = data.content[index].pContent;
        })
}

async function reqData() {
    await fetch('text/data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log("data", data)
            appendDataToHtml(data);
        })
        .catch(reason => {
            throw Error(reason)
        })
}

reqData().then(null);

// await reqData().then(r => null);
// })
