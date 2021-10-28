import { Options, Vue, prop } from 'vue-class-component';
import IntraloxBadge from '../IntraloxBadge/IntraloxBadge.vue';
import { PhoneIcon, MessageSquareIcon, UserIcon, ChevronDownIcon, SettingsIcon, LogOutIcon  } from 'vue-feather-icons';

class Props {
    // optional prop with default
    public showNav = prop<boolean>({ default: false, required: true });

    public navLinks = prop<string[]>({ default: () => {
        return [
            {
                linkTitle: 'Products',
                url: 'http://intralox.com/',
            },
            {
                linkTitle: 'Services',
                url: 'http://intralox.com/',
            },
            {
                linkTitle: 'Industries',
                url: 'http://intralox.com/industries.aspx',
            },
            {
                linkTitle: 'Downloads',
                url: 'http://intralox.com/phone-numbers.aspx',
            },
            {
                linkTitle: 'Support',
                url: 'http://intralox.com/',
            },
        ];
    } });

    public callOutLinks = prop<boolean>({ default: false });

    public globalHeaderType = prop<'customerFacing' | 'productSpecific'>({default: 'customerFacing' });

    public title =  prop<string>({ required: true });

    public userInfo = prop<boolean>({ default: false });

    public navclass = prop<string>({default: ''});
  }
  

@Options({
    name:'Header',
    components: {
        IntraloxBadge,
        MessageSquareIcon,
        PhoneIcon,
        ChevronDownIcon,
        SettingsIcon,
        LogOutIcon
    }
})

export default class Header extends Vue.with(Props) {

    public navClass: string = '';

    public mounted() {
        this._setNavClass(this.showNav);
    }

    public _toggleNav(event: any) {
        this.showNav = !this.showNav;
        this._setNavClass(this.showNav);
    }

    public _setNavClass(showNavState: boolean) {
        this.$emit('update:navclass', showNavState ? 'show-nav' : '');
    }
}
