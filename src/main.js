import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Button, Field, Cell, CellGroup, Tabbar, TabbarItem, Toast, Tabs, Tab } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Button)
app.use(Field)
app.use(Cell)
app.use(CellGroup)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Tabs)
app.use(Tab)
app.use(Toast)

app.mount('#app')
