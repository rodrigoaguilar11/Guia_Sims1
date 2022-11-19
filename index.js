document.addEventListener("DOMContentLoaded", function () {
    setWallpaper();
    const wallpaper = document.getElementById("wallpaper");
    if (localStorage.getItem("wallpaper") == undefined) {
        localStorage.setItem("wallpaper", "old_town");
        setWallpaper();
    } else {
        setWallpaper();
    }

    document.getElementById("old_town").addEventListener("click", () => {
        localStorage.setItem("wallpaper", "old_town");
        setWallpaper();
    })
    document.getElementById("downtown").addEventListener("click", () => {
        localStorage.setItem("wallpaper", "downtown");
        setWallpaper();
    })
    document.getElementById("vacation").addEventListener("click", () => {
        localStorage.setItem("wallpaper", "vacation");
        setWallpaper();
    })
    document.getElementById("study_city").addEventListener("click", () => {
        localStorage.setItem("wallpaper", "study_city");
        setWallpaper();
    })
    document.getElementById("magic_town").addEventListener("click", () => {
        localStorage.setItem("wallpaper", "magic_town");
        setWallpaper();
    })
    //End of DOMContentLoaded
});

function setWallpaper() {
    let actualWallpaper = localStorage.getItem("wallpaper")
    wallpaper.poster = "img/" + actualWallpaper + "_poster.png";
    wallpaper.src = "img/" + actualWallpaper + ".mp4";
}