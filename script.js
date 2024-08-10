const select = document.querySelector(".custom-select");
const items = document.getElementsByClassName("menu-item");
const tables = document.getElementsByClassName("income-table");
console.log(items);

select.onchange = (e) => {
    const elements = document.querySelectorAll("[data-en]");
    elements.forEach((element) => {
        const translation = element.getAttribute(`data-${e.target.value}`);
        if (translation) {
            element.textContent = translation;
        }
    });
};



for (let i = 0; i < items.length; i++) {
    items[i].onclick = () => {
        items[i].id = 'menu-active'
        items[i === 0 ? 1 : 0].id = 'menu-not-active'
        tables[i].id = 'active'
        tables[i === 0 ? 1 : 0].id = 'passive'
    } 
}