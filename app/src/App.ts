import { Options, Vue, prop } from 'vue-class-component';
import AppHeader from '@/components/Header/Header.vue';
import Config from './config';

class Props {
    public appConfig?: Config;

    public navLinks = prop<string[]>({ default: () => {
        return [
            {
                linkTitle: 'Calibrations',
                url: '/calibrations'
            },
            {
                linkTitle: 'System Health',
                url: '/health'
            }
        ];
    }});
}

@Options({
    components: {
        AppHeader
    },
})
export default class App extends Vue.with(Props) {
    public data() {
        return {
            links: this.navLinks
        }
    }
}
