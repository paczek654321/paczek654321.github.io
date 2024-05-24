const colors =
{
    "default":
    {
        "primary-color": "rgb(129, 107, 129)",
        "secondary-color": "rgb(2, 0, 34)",
        "project-text-color": "rgb(3, 0, 27)",
        "distinct-link-color": "rgb(9, 0, 78)",
        "projects-border-color": "black",
    },
    "high_contrast":
    {
        "primary-color": "#101010",
        "secondary-color": "#101010",
        "project-text-color": "cyan",
        "distinct-link-color": "yellow",
        "projects-border-color": "white",
    }
}

let root = null

function setColors(preset)
{
    root.style.setProperty("--primary-color", colors[preset]["primary-color"])
    root.style.setProperty("--secondary-color", colors[preset]["secondary-color"])
    root.style.setProperty("--project-text-color", colors[preset]["project-text-color"])
    root.style.setProperty("--distinct-link-color", colors[preset]["distinct-link-color"])
    root.style.setProperty("--projects-border-color", colors[preset]["projects-border-color"])
}

window.onload = ()=>
{
    root = document.getElementsByTagName("html")[0]
    setColors("default")
}