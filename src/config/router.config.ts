import BasicLayout from '@/layouts/BasicLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import i18n from '@/locales'

export const constantRouterMap = [
  {
    name: 'basicLayout',
    path: '/',
    redirect: '/dashboard',
    component: BasicLayout,
    children: [],
  },
  {
    name: 'authLayout',
    path: '/auth',
    component: AuthLayout,
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        name: 'login',
        path: '/auth/login',
        meta: {
          title: '登录',
        },
        component: () => import('@/views/auth/login/index.vue'),
      },
      {
        name: 'register',
        path: '/auth/register',
        meta: {
          title: '注册',
        },
        component: () => import('@/views/auth/register/index.vue'),
      },
    ],
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    hidden: true,
    meta: {
      title: '404',
    },
    component: () => import('@/views/exception/404.vue'),
  },
]

export interface IRouterMeta {
  icon: string
  title: string
  requireAuth?: boolean
  hidden?: boolean
  roles?: string[]
}

export interface IRouter {
  name: string
  path: string
  meta: IRouterMeta
  component?: any
  children?: IRouter[]
}

export function getAsyncRouterMap(): IRouter[] {
  return [
    {
      name: i18n.global?.t('menu.dashboard'),
      path: '/dashboard',
      meta: {
        icon: 'EditOutlined',
        title: '首页',
        requireAuth: true,
      },
      component: () => import('@/views/dashboard/index.vue'),
    },
    {
      name: i18n.global?.t('menu.dataFactory'),
      path: '/dataFactory',
      meta: {
        icon: 'EditOutlined',
        title: '数据工厂',
        requireAuth: true,
      },
      children: [
        {
          name: '数据仓',
          path: '/dataWarehouse',
          meta: {
            icon: 'EditOutlined',
            title: '数据仓',
            requireAuth: true,
          },
          component: () => import('@/views/dataFactory/dataWarehouse/index.vue'),
        },
        {
          name: '数据接入',
          path: '/dataAccess',
          meta: {
            icon: 'EditOutlined',
            title: '数据接入',
            requireAuth: true,
          },
          component: () => import('@/views/dataFactory/dataAccess/index.vue'),
        },
        {
          name: '数据标签库',
          path: '/dataTagLibrary',
          meta: {
            icon: 'EditOutlined',
            title: '数据标签库',
            requireAuth: true,
          },
          component: () => import('@/views/dataFactory/dataTagLibrary/index.vue'),
        },
      ],
    },
    {
      name: i18n.global?.t('menu.sceneList'),
      path: '/sceneList',
      meta: {
        icon: 'EditOutlined',
        title: '场景列表',
        requireAuth: true,
      },
      children: [
        {
          name: '能源管理',
          path: '/energyManagement',
          meta: {
            icon: 'EditOutlined',
            title: '能源管理',
            requireAuth: true,
          },
          children: [
            {
              name: '能源消耗分析',
              path: '/energyConsumptionAnalysis',
              meta: {
                icon: 'EditOutlined',
                title: '能源消耗分析',
                requireAuth: true,
              },
              component: () => import('@/views/sceneList/energyManagement/energyConsumptionAnalysis/index.vue'),
            },
            {
              name: '能耗异常值分析',
              path: '/energyConsumptionAbnormalValueAnalysis',
              meta: {
                icon: 'EditOutlined',
                title: '能耗异常值分析',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '能源质量预测',
              path: '/energyQualityPrediction',
              meta: {
                icon: 'EditOutlined',
                title: '能源质量预测',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '节能诊断分析',
              path: '/energySavingDiagnosisAnalysis',
              meta: {
                icon: 'EditOutlined',
                title: '节能诊断分析',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '能源效率评估',
              path: '/energyEfficiencyEvaluation',
              meta: {
                icon: 'EditOutlined',
                title: '能源效率评估',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '能源成本分析',
              path: '/energyCostAnalysis',
              meta: {
                icon: 'EditOutlined',
                title: '能源成本分析',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '峰谷平衡优化',
              path: '/peakValleyBalanceOptimization',
              meta: {
                icon: 'EditOutlined',
                title: '峰谷平衡优化',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '能源预测与规划',
              path: '/energyForecastAndPlanning',
              meta: {
                icon: 'EditOutlined',
                title: '能源预测与规划',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '能源监控和报警',
              path: '/energyMonitoringAndAlarm',
              meta: {
                icon: 'EditOutlined',
                title: '能源监控和报警',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
          ],
        },
        {
          name: '设备资产管理',
          path: '/equipmentAssetManagement',
          meta: {
            icon: 'EditOutlined',
            title: '设备资产管理',
            requireAuth: true,
          },
          children: [
            {
              name: '设备故障诊断',
              path: '/equipmentFailureDiagnosis',
              meta: {
                icon: 'EditOutlined',
                title: '设备故障诊断',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '设备预测性维护',
              path: '/equipmentPredictiveMaintenance',
              meta: {
                icon: 'EditOutlined',
                title: '设备预测性维护',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '维修保养优化',
              path: '/maintenanceOptimization',
              meta: {
                icon: 'EditOutlined',
                title: '维修保养优化',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '资产寿命周期管理',
              path: '/assetLifecycleManagement',
              meta: {
                icon: 'EditOutlined',
                title: '资产寿命周期管理',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '设备利用率提升',
              path: '/equipmentUtilizationImprovement',
              meta: {
                icon: 'EditOutlined',
                title: '设备利用率提升',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '资产健康评估',
              path: '/assetHealthAssessment',
              meta: {
                icon: 'EditOutlined',
                title: '资产健康评估',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
          ],
        },
        {
          name: '生产质量管理',
          path: '/productionQualityManagement',
          meta: {
            icon: 'EditOutlined',
            title: '生产质量管理',
            requireAuth: true,
          },
          children: [
            {
              name: '生产过程监控与优化',
              path: '/productionProcessMonitoringAndOptimization',
              meta: {
                icon: 'EditOutlined',
                title: '生产过程监控与优化',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '产品质量预测与控制',
              path: '/productQualityForecastAndControl',
              meta: {
                icon: 'EditOutlined',
                title: '产品质量预测与控制',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '原材料异常检测',
              path: '/rawMaterialAbnormalDetection',
              meta: {
                icon: 'EditOutlined',
                title: '原材料异常检测',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
          ],
        },
        {
          name: '供应链管理',
          path: '/supplyChainManagement',
          meta: {
            icon: 'EditOutlined',
            title: '供应链管理',
            requireAuth: true,
          },
          children: [
            {
              name: '需求预测与计划',
              path: '/demandForecastAndPlanning',
              meta: {
                icon: 'EditOutlined',
                title: '需求预测与计划',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '供应商管理与评估',
              path: '/supplierManagementAndEvaluation',
              meta: {
                icon: 'EditOutlined',
                title: '供应商管理与评估',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '库存优化与管理',
              path: '/inventoryOptimizationAndManagement',
              meta: {
                icon: 'EditOutlined',
                title: '库存优化与管理',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '运输与物流优化',
              path: '/transportationAndLogisticsOptimization',
              meta: {
                icon: 'EditOutlined',
                title: '运输与物流优化',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '成本分析与优化',
              path: '/costAnalysisAndOptimization',
              meta: {
                icon: 'EditOutlined',
                title: '成本分析与优化',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
            {
              name: '物料效能分析',
              path: '/materialEfficiencyAnalysis',
              meta: {
                icon: 'EditOutlined',
                title: '物料效能分析',
                requireAuth: true,
              },
              component: () => import('@/views/dashboard/index.vue'),
            },
          ],
        },
      ],
    },
    {
      name: i18n.global?.t('menu.dataProcess'),
      path: '/dataProcess',
      meta: {
        icon: 'EditOutlined',
        title: '数据处理',
        requireAuth: true,
      },
      children: [
        {
          name: '数据清洗',
          path: '/dataCleaning',
          meta: {
            icon: 'EditOutlined',
            title: '数据清洗',
            requireAuth: true,
          },
          component: () => import('@/views/dataProcess/dataCleaning/index.vue'),
        },
        {
          name: '数据转换',
          path: '/dataTransformation',
          meta: {
            icon: 'EditOutlined',
            title: '数据转换',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '特征工程',
          path: '/featureEngineering',
          meta: {
            icon: 'EditOutlined',
            title: '特征工程',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '数据集划分',
          path: '/dataSetDivision',
          meta: {
            icon: 'EditOutlined',
            title: '数据集划分',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '样本不平衡处理',
          path: '/sampleImbalanceProcessing',
          meta: {
            icon: 'EditOutlined',
            title: '样本不平衡处理',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '数据集合并与拆分',
          path: '/dataSetMergeAndSplit',
          meta: {
            icon: 'EditOutlined',
            title: '数据集合并与拆分',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
      ],
    },
    {
      name: i18n.global?.t('menu.dataAnalysis'),
      path: '/dataAnalysis',
      meta: {
        icon: 'EditOutlined',
        title: '数据分析',
        requireAuth: true,
      },
      children: [
        {
          name: '查询统计',
          path: '/queryStatistics',
          meta: {
            icon: 'EditOutlined',
            title: '查询统计',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '可视化分析',
          path: '/visualAnalysis',
          meta: {
            icon: 'EditOutlined',
            title: '可视化分析',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '数据报表',
          path: '/dataReport',
          meta: {
            icon: 'EditOutlined',
            title: '数据报表',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '数字化大屏',
          path: '/digitalScreen',
          meta: {
            icon: 'EditOutlined',
            title: '数字化大屏',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '视觉智能监控分析',
          path: '/visualIntelligentMonitoringAnalysis',
          meta: {
            icon: 'EditOutlined',
            title: '视觉智能监控分析',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: 'AI对话式分析',
          path: '/aiDialogAnalysis',
          meta: {
            icon: 'EditOutlined',
            title: 'AI对话式分析',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
      ],
    },
    {
      name: i18n.global?.t('menu.modelDeploy'),
      path: '/modelDeploy',
      meta: {
        icon: 'EditOutlined',
        title: '模型部署',
        requireAuth: true,
      },
      children: [
        {
          name: '智能建模',
          path: '/intelligentModeling',
          meta: {
            icon: 'EditOutlined',
            title: '智能建模',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '模型评估',
          path: '/modelEvaluation',
          meta: {
            icon: 'EditOutlined',
            title: '模型评估',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '模型洞察',
          path: '/modelInsight',
          meta: {
            icon: 'EditOutlined',
            title: '模型洞察',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
        {
          name: '模型应用',
          path: '/modelApplication',
          meta: {
            icon: 'EditOutlined',
            title: '模型应用',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
      ],
    },
    {
      name: i18n.global?.t('menu.userCenter'),
      path: '/userCenter',
      meta: {
        icon: 'EditOutlined',
        title: '个人中心',
        requireAuth: true,
      },
      children: [
        {
          name: '个人信息管理',
          path: '/personalInformationManagement',
          meta: {
            icon: 'EditOutlined',
            title: '个人信息管理',
            requireAuth: true,
          },
          component: () => import('@/views/user/center/index.vue'),
        },
        {
          name: '通知管理',
          path: '/notificationManagement',
          meta: {
            icon: 'EditOutlined',
            title: '通知管理',
            requireAuth: true,
          },
          component: () => import('@/views/user/alert/index.vue'),
        },
        {
          name: '任务管理',
          path: '/taskManagement',
          meta: {
            icon: 'EditOutlined',
            title: '任务管理',
            requireAuth: true,
          },
          component: () => import('@/views/user/task/index.vue'),
        },
        {
          name: '帮助与支持',
          path: '/helpAndSupport',
          meta: {
            icon: 'EditOutlined',
            title: '帮助与支持',
            requireAuth: true,
          },
          component: () => import('@/views/dashboard/index.vue'),
        },
      ],
    },
    {
      name: '工具',
      path: '/tools',
      meta: {
        icon: 'EditOutlined',
        title: '工具',
        requireAuth: true,
      },
      children: [
        {
          name: '图表',
          path: '/charts',
          meta: {
            icon: 'EditOutlined',
            title: '图表',
            requireAuth: true,
          },
          component: () => import('@/views/tools/charts/index.vue'),
        },
        {
          name: '编辑器',
          path: '/editor',
          meta: {
            icon: 'EditOutlined',
            title: '编辑器',
            requireAuth: true,
          },
          component: () => import('@/views/tools/editor/index.vue'),
        },
        {
          name: '大屏',
          path: '/largeScreen',
          meta: {
            icon: 'EditOutlined',
            title: '大屏',
            requireAuth: true,
          },
          component: () => import('@/views/tools/largeScreen/index.vue'),
        },
      ],
    },
  ]
}
