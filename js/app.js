const createCirlce = (count) => {
    for (let i = 0; i < count; i++) {
        // console.log(i);
        const div = document.createElement('div');
        div.className = "circle-container";
        div.innerHTML = `
            <span class="circle"></span>
        `;
        document.querySelector('.container').appendChild(div);
        div.style.animationDelay = `${i*0.001}s`;
    }
};
 
createCirlce(250);