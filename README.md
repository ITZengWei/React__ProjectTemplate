# 项目基本步骤

+ 安装 react-app-rewired customize-cra

```cmd
  cnpm i react-app-rewired customize-cra -D
```

+ 设置项目 入口启动项目

```JavaScript
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
```


+ 创建 config-overrides 文件

```JavaScript
/*
 * @file config-overrides.js
 * @ author Zeng
 * 基于customize 和 react-app-rewired 的定制化配置件
  * */
const { override } = require('customize-cra')

module.exports = override()
```

+ 添加 less 和 less-loader

```cmd
  cnpm i less less-loader -D
```


## antd 配置less

+ 安装 antd

```cmd
  cnpm i antd -s
```

+ 安装 编译插件

```cmd
  cnpm i babel-plugin-import -D  
```

+ 配置主题

## 配置装饰器

```JavaScript
const TestHOC = (WrappedComponent) => {
  return class HOCComponent extends Component {
    render() {
      return (
        <>
          <WrappedComponent />
          <div>这是高阶组件装饰器信息</div>
        </>
      )
    }
  }
}

class App extends Component {
  render() {
    return (
      <div><Button type="primary">App</Button></div>
    )
  }
}

App.propTypes = {}


export default TestHOC(App)
```

+ 下载 `@babel/plugin-proposal-decorators -D`
+ 添加方法 

添加后的 写发

```JavaScript
const TestHOC = (WrappedComponent) => {
  return class HOCComponent extends Component {
    render() {
      return (
        <>
          <WrappedComponent />
          <div>这是高阶组件装饰器信息</div>
        </>
      )
    }
  }
}
@TestHOC
class App extends Component {
  render() {
    return (
      <div><Button type="primary">App</Button></div>
    )
  }
}

App.propTypes = {}


// export default TestHOC(App)
export default App
```


## 路由 

+ 安装 react-router-dom

```cmd
  cnpm i react-router-dom -S
```

### 基本页面解构 

```tree
  -Login
  -404
  -admin
    -dashboard
    -article
      -list
      -edit
    -settings  
```


#### 坑

```JavaScript
<Switch>
  {
    adminRouter.map(route => {
      return (
        <Route
          key={ route.path }
          path={ route.path }
          exact={ route.exact }
          render={
            (routerProps) => {
              return <route.component { ...routerProps }/>
            }
          }
        />
      )
    })
  }
</Switch>
```



