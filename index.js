let input = document.querySelector('.sendImg')
let imgDiv = document.querySelector('.img')
let imgFile
let imgFileLength 

input.addEventListener('change', (e) => {
    
        imgFileLength = e.target.files

          for (i=0; i<imgFileLength.length ; i++) {
              imgFile = URL.createObjectURL(imgFileLength[i])
              LoadImg()
          }
})


LoadImg = () => {
	imgDiv.innerHTML += `
         <img src='${imgFile}' class='imgs'> </img>
	`
}