// console.log("hello Everyone")

class lib {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }

};

class display {


    static clear() {
        let libform = document.getElementById("libform");

        libform.reset()
    }

    static add(book) {
        let tblBody = document.getElementById("tblBody");
        let tblbodystring = `
        <tr>
                   
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>
        `

        tblBody.innerHTML += tblbodystring;

    }

    static vaidate(book) {
        if (book.name == "") {
            return false;
        }
        else{
            return true;
        };

        if (book.author=="") {
            return false
        }
        else{
            return true
        }
        

    }
    static shorerr(type,message){
       let mssg =document.getElementById("errms");
       mssg.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
       <strong>Message!!</strong>  ${message}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
       `

       setTimeout(() => {
           mssg.innerHTML="";
       }, 3000);
    }
   
}



let libform = document.getElementById("libform");
libform.addEventListener("submit", libformsub);

function libformsub(e) {
    e.preventDefault();
    console.log("u have submitted the form");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;
    let type = document.getElementById("type").value;


    let fiction = document.getElementById("fiction");
    let cp = document.getElementById("cp")
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value.toUpperCase()
    }
    else if (cp.checked) {
        type = cp.value.toUpperCase()
    }
    else if (cooking.checked) {
        type = cooking.value.toUpperCase()
    }

    let book = new lib(name, author, type);
    console.log(book);

    if (display.vaidate(book)) {
        display.clear();
        display.add(book);
        display.shorerr("success","your book is added in the list")

    }
    else {
        console.log("hello")
        display.shorerr("oops","your book cant be added in list")
    }
}

