var cat_container = document.getElementById("cat_container");

window.onload = function () {


    var item = {
        image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1440",
        title: "Lucky",
        description: "Хороший пес. Дуже милий"
    };

    var data =
        `<div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card img-fluid">
                    <img src="${item.image}" class="card-img-top" alt="котик">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <button type="button" class="btn btn-danger">Видалить</button>
                    </div>
                </div>
              </div>`;
    cat_container.innerHTML += data;

}

var image = document.getElementById("image");
//Подія вибору фото для користувача
image.onchange = function (e) {
    //console.log("select image", e.target.files[0]);
    var file = e.target.files[0];
    if (file) {
        var url = URL.createObjectURL(file);
        document.getElementById("selectImage").src = url;
    }
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.onclick = function () {

    /*alert("Show dialog");*/
    var img = document.getElementById("selectImage").src;
    var title = document.getElementById("txtTitle");
    var description = document.getElementById("txtDescription");
    var item = {
        image: img,
        title: title.value,
        description: description.value
    };
    image.value = "";
    title.value = "";
    description.value = "";
    var data =
        `<div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card img-fluid">
                    <img src="${item.image}" class="card-img-top" alt="котик">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <button type="button" class="btn btn-danger">Видалить</button>
                    </div>
                </div>
              </div>`;

     cat_container.innerHTML += data;

    var myModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('addModal'));
    myModal.hide();
}