const colors =
{
    "default":
    {
        "primary-color": "rgb(129, 107, 129)",
        "secondary-color": "rgb(2, 0, 34)",
        "project-text-color": "rgb(3, 0, 27)",
        "distinct-link-color": "rgb(9, 0, 78)"
    },
    "high_contrast":
    {
        "primary-color": "black",
        "secondary-color": "black",
        "project-text-color": "cyan",
        "distinct-link-color": "yellow" 
    }
}

let root = null

function setColors(preset)
{
    root.style.setProperty("--primary-color", colors[preset]["primary-color"])
    root.style.setProperty("--secondary-color", colors[preset]["secondary-color"])
    root.style.setProperty("--project-text-color", colors[preset]["project-text-color"])
    root.style.setProperty("--distinct-link-color", colors[preset]["distinct-link-color"])
}

window.onload = ()=>
{
    root = document.getElementsByTagName("html")[0]
    setColors("default")
}