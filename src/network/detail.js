import {request} from './request';

export function getDetail(iid){
  return request({
    url:'/api/w6/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/api/w6/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo) {
      this.shopLogo = shopInfo.shopLogo
      this.name = shopInfo.name
      this.goodsCount = shopInfo.cGoods
      this.sells = shopInfo.cSells
      this.score = shopInfo.score

  }
}

export class GoodsParams{
  constructor(info,rule) {
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
  }
}