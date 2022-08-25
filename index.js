let input = document.querySelector('.sendImg')
let imgDiv = document.querySelector('.img')

input.addEventListener('change', (e, file) => {
    
        imgFileLength = e.target.files

          for (i=0; i<e.target.files.length ; i++) {
              file = URL.createObjectURL(e.target.files[i])
              LoadImg(file)
          }
})

LoadImg = (filesValue) => {
	imgDiv.innerHTML += `
         <img src='${filesValue}' class='imgs'> </img>
	`
}