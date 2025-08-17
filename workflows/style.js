const shirt1 = document.getElementById('shirt1')
const shirt2 = document.getElementById('shirt2')
const shirt3 = document.getElementById('shirt3')

shirt1.addEventListener('click', function(){
        document.getElementById("gallery").src = "./gallery/T-shirt-1.jpeg";    
        
})

shirt2.addEventListener('click', function(){
        document.getElementById("gallery").src = "./gallery/T-shirt.2.jpeg";    
        

})

shirt3.addEventListener('click', function(){
         document.getElementById("gallery").src = "./gallery/T-shirt.3.jpeg";    

})
