const bgwhite=document.getElementById('bgwhite')
const bgdark=document.getElementById('bgdark')

document.getElementById('whitebg').addEventListener('click',()=>{
    bgdark.style.display='none'
    bgwhite.style.display='block'
})
document.getElementById('darkbg').addEventListener('click',()=>{
    bgwhite.style.display='none'
    bgdark.style.display='block'
})




const result=async(cityName)=>{
    const res=await fetch(`https://goweather.herokuapp.com/weather/${cityName}`)
    const data=await res.json()
    return data
}
const display=async(city)=>{
    let res= await result(city)
    console.log(res)
    document.getElementById('description').innerHTML=res.description
    let fernhite=parseInt(res.temperature)

    isCoolOrWarm(fernhite)
    celsiusToFahrenheit(fernhite)
}

document.getElementById('darkButton').addEventListener('click',()=>{
    let cityInput = document.getElementById('citynamedark');
    let city = cityInput.value; // Get the value from the input field
    display(city);

})

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    let fernhiteDark=document.getElementById('fernhiteDark');
    fernhiteDark.innerHTML=fahrenheit+'&deg;F';
  }



function isCoolOrWarm(temperature) {
    let coolDark=document.getElementById('coolDark');
    let warmDark=document.getElementById('warmDark');
    const celsius = parseInt(temperature);
    if (!isNaN(celsius)) {
      return celsius < 20 ? coolDark.innerHTML=temperature+'&deg;C' : warmDark.innerHTML=temperature+'&deg;C';
    }
    return 'Unknown';
}











function checkWidth() {

    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Check if the width is greater than 767px (desktop size)
    if (width > 767) {
        document.getElementById("desktopMessage").style.display = "block";
        bgwhite.style.display='none'
        bgdark.style.display='none'
    } else {
        document.getElementById("desktopMessage").style.display = "none";
    }
}

// Call the checkWidth function on page load
checkWidth();

// Call the checkWidth function whenever the window is resized
window.addEventListener('resize', checkWidth);