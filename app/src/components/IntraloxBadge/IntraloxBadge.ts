import { Options, prop, Vue } from 'vue-class-component';
class Props {
    title = prop<string>({ default: 'Intralox' })
}

@Options({ name:'IntraloxBadge' })
export default class IntraloxBadge extends Vue.with(Props) {
}
