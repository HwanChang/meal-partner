<template>
  <v-app
    :style="{background: $vuetify.theme.currentTheme.contents}"
  >
    <v-app-bar
      fixed
      app
      flat
      color="header"
    >
      <v-container fluid grid-list-md>
        <v-layout v-if="$vuetify.breakpoint.mdAndUp">
          <v-flex row md3 lg3 xl4 pt-2>
            <router-link
              to="/"
            >
              <v-img
                :src="require('@/static/logo.svg')"
                max-width="200px"
                max-height="40px"
              />
            </router-link>
            <v-spacer />
          </v-flex>
          <v-flex md5 lg4 xl3 pt-2>
            <v-text-field
              v-model="restaurantName"
              label="식당을 검색하세요!"
              outlined
              hide-details
              dense
              append-icon="mdi-magnify"
              clearable
              @click:append="searchClick"
              @keyup.enter="searchClick"
            />
          </v-flex>
          <v-flex md4 lg5 xl5 pt-2>
            <v-btn
              v-for="(menu, i) in menuItems"
              :key="i"
              :to="menu.to"
              active-class="no-active"
              text
            >
              {{ menu.title }}
            </v-btn>
          </v-flex>
          <v-flex>
            <theme-mode-change />
          </v-flex>
        </v-layout>
        <v-layout v-else>
          <v-flex xs9 pt-3>
            <router-link
              to="/"
            >
              <v-img
                :src="require('@/static/logo.svg')"
                max-width="150px"
                max-height="40px"
              />
            </router-link>
          </v-flex>
          <v-flex xs1 mr-5>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs1 mr-5>
            <theme-mode-change />
          </v-flex>
          <v-flex xs1>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xs"
      v-model="drawer"
      fixed
      app
      right
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar />
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ title }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              icon
              @click="drawer = !drawer"
            >
              <v-icon>mdi-arrow-collapse-right</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item
          v-for="(menu, i) in menuItems"
          :key="i"
          :to="menu.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="menu.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
      color="footer"
    >
      <v-spacer />
      <span style="color: white">&copy; {{ new Date().getFullYear() }} HwanChang</span>
    </v-footer>
  </v-app>
</template>

<script>
import ThemeModeChange from '@/components/ThemeModeChange'
export default {
  components: {
    ThemeModeChange
  },
  data () {
    return {
      restaurantName: '',
      drawer: false,
      fixed: false,
      menuItems: [
        {
          title: '홈',
          to: '/'
        },
        {
          title: '식사등록',
          to: '/meal'
        }
      ],
      title: '식사파트너'
    }
  },
  methods: {
    searchClick () {
      //
    }
  },
  head: {
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
</script>

<style>
/*
  메뉴버튼 클릭 시 백그라운드 색 남지않도록 적용
*/
.v-btn--active.no-active::before {
  opacity: 0 !important;
}

/*
  font 적용
*/
.v-application {
  font-family: "Noto Sans KR", AppleSDGothicNeo, "Apple SD Gothic Neo", AppleSDGothicNeo-Light, HelveticaNeue-Light, "Malgun Gothic", "맑은 고딕", sans-serif;
}
.v-application .title {
  font-family: "Noto Sans KR", AppleSDGothicNeo, "Apple SD Gothic Neo", AppleSDGothicNeo-Light, HelveticaNeue-Light, "Malgun Gothic", "맑은 고딕", sans-serif;
}
</style>
