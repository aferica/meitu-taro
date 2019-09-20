import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss'

import get from '../../utils/request'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      title: '首页',
      tags: [],
      author: [],
      cate: [],
      current: 0
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.getData()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getData() {
    const data = get('https://common.aferica.site/common/util/redirect?url=https://api.meizitu.net/json/x.json&needReferer=1&customReferer=https://app.mmzztt.com')
    console.log(data)
    this.setState({
      tags: data[0],
      author: data[1],
      cate: data[2]
    })
  }

  handleClick(index) {
    this.setState({
      current: index
    })
  }

  render () {
    // const tagsItem = this.state.tags.map((tag, index) => {
    //   return <AtTabsPane current={this.state.current} index={index} >
    //     <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >{tag.title}</View>
    //   </AtTabsPane>
    // })

    return (
      <View className='index'>
        {/* <AtTabs
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          scroll
          height='200px'
          tabList={this.state.tags}>
          {tagsItem}
        </AtTabs> */}
        <AtTabs
          animated={false}
          current={this.state.current}
          tabList={[
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' }
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
