window.addEventListener("DOMContentLoaded", async () => {

    async function reqData() {
        await fetch('text/data.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("data", data)
                document.querySelectorAll(".hero")[0]
                    .innerHTML = data.hero.html;

                document.querySelectorAll(".content ul li a")
                    .forEach((ele, index)=>{
                        ele.innerHTML = data.content[index].aContent;
                    })
                document.querySelectorAll(".content ul li p")
                    .forEach((ele, index)=>{
                        ele.innerHTML = data.content[index].pContent;
                    })


            })
    }

    await reqData();

})
