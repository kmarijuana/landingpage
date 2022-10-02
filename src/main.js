import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircleExclamation, faEnvelopeCircleCheck,faPen } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelopeCircleCheck,faPen,faCircleExclamation)


// import vue3GoogleLogin from 'vue3-google-login'

import GAuth from 'vue3-google-oauth2'
// const gAuthOptions = 

createApp(App).use(store).use(router)

.use(GAuth, { clientId: '594749811693-j8rrlliai8tkj81gh65vi5f3tgd02seq.apps.googleusercontent.com', scope: 'email',plugin_name:'landingpage', prompt: 'consent', fetch_basic_profile: false })
// .use(vue3GoogleLogin, 
//     {
//     // clientId: '958652903991-j5p3g656q6g9dp09te6iibas69qhaodv.apps.googleusercontent.com'
//     clientId: '594749811693-j8rrlliai8tkj81gh65vi5f3tgd02seq.apps.googleusercontent.com'
//   }
//   )
.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
