const app = Vue.createApp({
    data(){
        return{
            joke:"",
            classList:""
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
                u.lang = 'en-US';
                u.rate = 1.2;
               
                speechSynthesis.speak(u);
        }
        
    },

    // created(){
    //     var u = new SpeechSynthesisUtterance()
    //             u.text = "Tell me a joke";
    //             u.lang = 'en-US';
    //             u.rate = 1.2;
               
    //             speechSynthesis.speak(u);

    //     var recognition = new SpeechRecognition();
    //     recognition.onresult = function(event) {
    //         if (event.results.length > 0) {
    //         q.value = event.results[0][0].transcript;
    //         q.form.submit();
    //         }
    //     }
    // }
})
app.mount("#updates")