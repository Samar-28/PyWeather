const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd8a0b8f74msh19319b9dbf81204p1a6a18jsndb5d74a318d2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let url='https://weatherapi-com.p.rapidapi.com/current.json?q=%3Cnoida%3E';
let btn=document.getElementById('btn');
btn.addEventListener('click',search);
function search(e){
    let sval=document.getElementById('c')
    url=`https://weatherapi-com.p.rapidapi.com/current.json?q=%3C${sval.value}%3E`
    fetch(url, options)
	.then(response => response.json())
	.then(response => {

        temp.innerHTML=response.current.temp_c
        humidity.innerHTML=response.current.humidity
        wind.innerHTML=response.current.wind_kph
        loc.innerHTML=response.location.name.toUpperCase()

        console.log(response)
    }
        )
	.catch(err => console.error(err));
    const ai = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'X-API-KEY': '663d1402-30f0-4a43-90c2-877f2b61dc55'
        },
        body: JSON.stringify({
          enable_google_results: 'true',
          enable_memory: false,
          input_text: `slogan for weather in ${sval.value} in about 20 words`
        })
      };
      
      fetch('https://api.writesonic.com/v2/business/content/chatsonic?engine=premium', ai)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            text.innerHTML=response.message;
        })
        .catch(err => console.error(err));

}

