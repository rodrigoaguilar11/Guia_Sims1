document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav").innerHTML += `
    <div class="col-12 d-flex mt-0 pt-0">
    <div class="col-lg-4 col-md-8 col-sm-7 d-flex">
        <a href="../index.html"><img id="logo" src="../img/the_sims_logo.png"></a>
        <button class="btn" style="margin-left: 10px;" data-bs-toggle="collapse" aria-expanded="false"
            aria-controls="collapseExample" role="button" href="#collapseMenu"><span>Menu
                Principal</span></button>
    </div>
    <div class="travel_bar col-6 d-none d-lg-block">
        <img id="old_town" src="../img/old_town.png" alt="old_town.png">
        <img id="downtown" src="../img/downtown.png" alt="downtown.png">
        <img id="vacation" src="../img/vacation.png" alt="vacation.png">
        <img id="study_city" src="../img/study_city.png" alt="study_city.png">
        <img id="magic_town" src="../img/magic_town.png" alt="magic_town.png">
    </div>
    <div class="col-lg-2 col-md-4 col-sm-none mt-0 pt-0 d-flex">
        <button class="btn d-none d-lg-block"><a href="../info/info.html"><span>Acerca de</span></a></button>
    </div>
</div>
<div class="collapse sims_div p-4" id="collapseMenu">
    <button class="btn"><a href="../index.html"><span>Inicio</span></a></button>
    <button class="btn"><a href="../info/info.html"><span>Acerca de</span></a></button>
    <button class="btn"><a href="../fondo/fondo.html"><span>Ver Fondo</span></a></button>

    <button class="btn" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample"
        role="button" href="#collapseMenu"><span>Cerrar</span></button>
</div>
    `;
        const wallpaper = document.getElementById("wallpaper");
    if (localStorage.getItem("wallpaper") == undefined) {
        localStorage.setItem("wallpaper", "old_town")
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
    let actualWallpaper = localStorage.getItem("wallpaper");
    wallpaper.poster = "../img/" + actualWallpaper + "_poster.png";
    wallpaper.src = "../img/" + actualWallpaper + ".mp4";
}