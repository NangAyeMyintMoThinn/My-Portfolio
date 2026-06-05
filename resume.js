function showTab(tabId, button){

    const contents =
        document.querySelectorAll(".tab-content");

    contents.forEach(content=>{
        content.classList.remove("active-content");
    });

    document
        .getElementById(tabId)
        .classList.add("active-content");

    const buttons =
        document.querySelectorAll(".tab-btn");

    buttons.forEach(btn=>{
        btn.classList.remove("active");
    });

    button.classList.add("active");
}