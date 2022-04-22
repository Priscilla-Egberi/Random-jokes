const app = Vue.createApp({
    data(){
        return{
            joke:"",
            classList:"",
            languages:[
                {name:'french', code:"fr-FR"},
                {name:'english', code:"en-US"},
                {name:'spanish', code:"es-ES"}
            ]
        };
    },
    methods:{
        async getApi(){
                const res = await axios.get('https://icanhazdadjoke.com', {
                    headers:{
                        Accept:"application/json"
                    }
                })
                
                this.joke= res.data.joke;
                this.classList="animation";
                var u = new SpeechSynthesisUtterance()
                u.text = this.joke;
                u.lang = 'de-DE';
                u.rate = 1;
               
                speechSynthesis.speak(u);
        },
        changeLanguage(){
            
        }
        
    },

   created(){
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
    .map(result=> result[0])
    .map(result => result.transcript)
    .join('');
    if (transcript == 'tell me a joke'){
        this.getApi();
    }
})

recognition.addEventListener('end', recognition.start);
recognition.start();
}

})
app.mount("#updates")