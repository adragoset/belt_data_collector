import { Options, Vue, prop } from 'vue-class-component';
import AppHeader from '@/components/Header/Header.vue';
import Config from './config';

class Props {
    public appConfig?: Config;

    public navLinks = prop<string[]>({ default: () => {
        return [
            {
                linkTitle: 'Locations',
                url: '/locations'
            },
            {
                linkTitle: 'Stored Reports',
                url: '/stored-reports'
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
