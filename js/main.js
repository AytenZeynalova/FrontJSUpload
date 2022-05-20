let fileinput =document.getElementById('fileinput');

fileinput.addEventListener('change',function(){

    [...this.files].forEach(file=>{

        if(file.type.startsWith('image/')){
        let reader= new FileReader();

        reader.onload=function(){
            
                let img = document.createElement('img');
                img.classList.add('images');
                let deleteimg= document.createElement('a');
                deleteimg.classList.add('delete');
                deleteimg.innerText='X';
                document.body.appendChild(deleteimg);
                img.setAttribute('src',reader.result);
                document.body.appendChild(img);

                deleteimg.addEventListener('click',function(){

                    deleteimg.remove();
                    img.remove();
                })

        }

        reader.readAsDataURL(file);
    }else{
        console.log('format sehvdir')
    }

    })
})

let imageupld = document.querySelector('.uploadimg');
imageupld.addEventListener('click',function(){
fileinput.click();
})








 
