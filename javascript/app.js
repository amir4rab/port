class Ui{
    titleUI = ()=>{
        const title = document.getElementById("mainHeader");
        const titles = ["Developer","Designer"];
        /**  
        ** Setting blinker 
        **/
        function blinker(){
            setInterval(() => {
                title.classList[1] === "blinker-active" ? title.classList.remove("blinker-active") : title.classList.add("blinker-active");
            }, 500);
        }
        blinker();
        /**  
        ** Changing titles content 
        **/
        let index = 0,count = 0;
        function titleChanger(){
            if(count != titles[index].length){
                title.innerHTML = titles[index].slice(0 , ++count);
                setTimeout(titleChanger, 250);
            }else{
                index === titles.length - 1 ? index = 0 : index++;
                count = 0;
                setTimeout(titleChanger, 2500);
            }
        }
        titleChanger();
    };
    slideShowBtn = (id)=>{
        const cardSize = window.innerWidth > 799 ? 600 : 300;

        const section = document.getElementById(`${id}Slides`).children;
        const dots = [...section[0].children];

        console.log(typeof(dots));

        const row = document.getElementById(`${id}Row`);

        console.log(dots);
        for(let i = 0;i<dots.length;i++){
            dots[i].addEventListener("click",()=>{
                dots.forEach((dot)=>{
                    dot.className = "";
                })
                dots[i].className = "active-dot";
                row.style = `transform: translateX(${-cardSize*i}px)`;
            })
        }
    };
}
const ui = new Ui();
ui.titleUI()
ui.slideShowBtn("highlights");