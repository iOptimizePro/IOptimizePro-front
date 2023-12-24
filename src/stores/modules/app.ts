import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { theme } from 'ant-design-vue'
import type { primaryColorEnumType } from '@/config/theme.config'
import variables from '@/styles/variables.module.scss'
import { useI18n } from 'vue-i18n'
import { syncAsyncRoute } from '@/router'

/**
 * app 配置 开启持久化
 */
export const useAppStore = defineStore(
  'app',
  () => {
    const themeName = ref<primaryColorEnumType>('origin') // 主题名称
    const locale = ref<'zhCN' | 'enUS'>('zhCN') // 语言
    const localeComp = computed(() => {
      const { locale: iLocale } = useI18n()
      iLocale.value = locale.value
      syncAsyncRoute()
      return locale.value
    })
    const darkModeRef = ref<'dark' | 'light'>('light') // 颜色模式
    const darkMode = computed({
      get() {
        return darkModeRef.value
      },
      set(val) {
        darkModeRef.value = val
        document.documentElement.setAttribute('data-dark', darkModeRef.value)
      },
    })
    const themeConfig = computed(() => {
      // 主题配置
      document.documentElement.setAttribute('data-theme', themeName.value)
      // @ts-ignore
      return {
        token: {
          colorPrimary: variables[themeName.value] || '#27ba9b',
          colorSuccess: '#1dc779',
          colorWarning: '#ffb302',
          colorError: '#cf4444',
          colorInfo: variables[themeName.value] || '#27ba9b',
          wireframe: true,
          borderRadius: 0, // 直角风格
        },
        algorithm: darkMode.value === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }
    })
    const setThemeName = (value: primaryColorEnumType) => {
      themeName.value = value
    }
    const setLocale = (value: 'zhCN' | 'enUS') => {
      locale.value = value
    }
    const toggleDarkMode = () => {
      darkMode.value = darkMode.value === 'light' ? 'dark' : 'light'
    }
    return {
      themeName,
      locale,
      localeComp,
      themeConfig,
      darkModeRef, // 用于持久化 可怜的computed无法持久化
      darkMode,
      setThemeName,
      setLocale,
      toggleDarkMode,
    }
  },
  {
    persist: true,
  },
)
