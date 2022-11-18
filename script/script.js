if(localStorage.getItem("wallpaper") == undefined){
    localStorage.setItem("wallpaper","/img/old_town.mp4")
    localStorage.setItem("poster","/img/old_town_poster.png")
}
document.addEventListener("DOMContentLoaded", function () {
    const wallpaper = document.getElementById("wallpaper");
    setWallpaper();

    document.getElementById("old_town").addEventListener("click", () => {
        localStorage.setItem("poster","/img/old_town_poster.png");
        localStorage.setItem("wallpaper","/img/old_town.mp4");
        setWallpaper();
    })
    document.getElementById("downtown").addEventListener("click", () => {
        localStorage.setItem("poster","/img/downtown_poster.png");
        localStorage.setItem("wallpaper","/img/downtown.mp4");
        setWallpaper();
    })
    document.getElementById("vacation").addEventListener("click", () => {
        localStorage.setItem("poster","/img/vacation_poster.png");
        localStorage.setItem("wallpaper","/img/vacation.mp4");
        setWallpaper();
    })  
    document.getElementById("study_city").addEventListener("click", () => {
        localStorage.setItem("poster","/img/study_city_poster.png");
        localStorage.setItem("wallpaper","/img/study_city.mp4");
        setWallpaper();
    }) 
    document.getElementById("magic_town").addEventListener("click", () => {
        localStorage.setItem("poster","/img/magic_town_poster.png");
        localStorage.setItem("wallpaper","/img/magic_town.mp4");
        setWallpaper();
    }) 

    //End of DOMContentLoaded
});

function setWallpaper(){
    wallpaper.poster = localStorage.getItem("poster");
    wallpaper.src = localStorage.getItem("wallpaper");
}