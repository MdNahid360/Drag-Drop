let dragArea = document.getElementById('drag&DropArea')
let info = document.getElementById('info')
let msg = document.getElementById('e')
let file;

dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    // console.log('file dragover active now');
    dragArea.classList.add('active')
})


dragArea.addEventListener("dragleave", () => {
    // console.log('file dragleave active now');
    dragArea.classList.remove('active')
})

dragArea.addEventListener("drop", (e) => {
    e.preventDefault();
    // console.log('file drag active now');
    file = e.dataTransfer.files[0]
    console.log(file); //lastModifiedDate, type
    const name = file.name;
    const date = file.lastModifiedDate;
    const type = file.type;
    const size = file.size;
    let typeFile = file.type;
    let validData = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if (validData.includes(typeFile)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            console.log(fileURL);
            // let imgTag = `<img src="${fileURL}" class="img-fluid" alt="pic"/>`
            // dragArea.innerHTML = imgTag;
            // display image information
            info.innerHTML = `
                <div class="row">
                <div class="col-lg-4 col-md-4 col-12 mt-2">
                    <img src="${fileURL}" class="img-fluid" alt="">
                </div>
                <div class="col-lg-8 col-md-8 col-12 mt-2">
                        <ul class="list-unstyled">
                            <li class="d-flex ">
                                <span>Name : </span>
                                <span class="ml-2"> ${name}</span>
                            </li> <li class="d-flex ">
                                <span>Date : </span>
                                <span class="ml-2"> ${date}</span>
                            </li> <li class="d-flex ">
                                <span>Type : </span>
                                <span class="ml-2"> ${type}</span>
                            </li>
                             <li class="d-flex ">
                                <span>Type : </span>
                                <span class="ml-2"> ${size} Bytes</span>
                            </li>
                        </ul>
                </div>
            </div>
            `
            msg.classList.add("d-none")

        }
        fileReader.readAsDataURL(file)
    } else {
        msg.classList.add("d-block")
    }

})