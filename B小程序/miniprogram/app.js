App({
  async onLaunch(){
  },
  async cloud(){
    if(this.c1 == null){
      this.c1 = new wx.cloud.Cloud({
        resourceAppid: '',
        resourceEnv: '',
      })
      const result = await this.c1.init()
      console.log('装载完成',result)
    }
    return this.c1;
  }
})
