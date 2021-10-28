<template>
<header class="ox-global-header">
    <nav class="navbar">
        <ul class="height-100">
            <div class="display--flex" v-if="callOutLinks">
                <li class="navbar__callout">
                    <a href="">
                        <MessageSquareIcon class="navbar-icon"></MessageSquareIcon>
                        Get A Quote
                    </a>
                </li>
                <li class="navbar__callout lighter">
                    <a href="">
                        <PhoneIcon class="navbar-icon"></PhoneIcon>
                        Call Us
                    </a>
                </li>
            </div>

            <div class="display--flex" v-if="userInfo">
                <!-- this should be converted to a component -->
                <span class="ox-global-header__user-info" role="button">
                    <div class="ox-global-header__user-info-icons">
                        <UserIcon class="user-info-icon user-info-icon--large fill-white"></UserIcon>
                        <ChevronDownIcon class="user-info-icon user-info-icon--small"></ChevronDownIcon>
                    </div>
                    <ul>
                        <li><a href="#">User Name <SettingsIcon class="user-info-action-icon"></SettingsIcon></a></li>
                        <li><a href="#">Logout <LogOutIcon class="user-info-action-icon"></LogOutIcon></a></li>
                    </ul>
                </span>
            </div>

            <li class="intralox-logo">
                <a href="http://intralox.com/" title="Intralox - A world leading conveyer belt company.">
                    <IntraloxBadge class="intralox-badge"></IntraloxBadge>
                </a>
            </li>
        </ul>
    </nav>

    <nav class="navbar navbar--main" :class="navClass" v-if="globalHeaderType!='productSpecific'">
        <span class="navbar__toggle" :class="navClass" @click="_toggleNav($event)">
            
        </span>
        <ul>
            <li v-for="(link,index) in navLinks" :key="index">
                <router-link :to="link.url">{{link.linkTitle}}</router-link>
            </li>
        </ul>
    </nav>

    <div v-if="globalHeaderType=='productSpecific'" class="display--flex">
        <div class="display--flex align-center">
            <h1 class="ox-global-header__headline">{{title}}</h1>
        </div>
        <div class="display--flex">
        </div>
    </div>
</header>
</template>
<script lang="ts" src="./Header.ts">
</script>