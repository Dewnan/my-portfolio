var tab_links = document.getElementsByClassName("tab-links")
var tab_contents = document.getElementsByClassName("tab-contents")

function openTab(tabName) {
    for (tab_link of tab_links) {
        tab_link.classList.remove("active-link")
    }
    for (tab_contect of tab_contents) {
        tab_contect.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}