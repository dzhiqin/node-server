import { Result } from "./result"

// class BaseValid {
//   constructor(valid,msg){
//     this.valid = valid
//     this.msg = msg
//   }
//   static FormError = new BaseValid(false,'参数格式错误')
//   static Success = new BaseValid(true, '校验成功')
// }
// export class Validator{
//   static formValidate(data){
//     if(!(data instanceof Object)){
//       throw Error('参数格式错误')
//     }
//   }
//   static present(data){
//     this.formValidate(data)
//     let arr = []
//     Object.keys(data).forEach(key => {
//       if(!data[key]){
//         arr.push(key)
//       }
//     })
//     if(arr.length){
//       return new BaseValid(false, `${arr.join(',')}校验失败,必须存在`)
//     }else{
//       return BaseValid.Success
//     }
//   }
//   static isNumber(data){
//     this.formValidate(data)
//     let arr = []
//     Object.keys(data).forEach(key => {
//       if(typeof(data[key]) !== 'number'){
//         arr.push(key)
//       }
//     })
//     if(arr.length){
//       return new BaseValid(false,`${arr.join(',')}校验失败,不是数字`)
//     }else{
//       return BaseValid.Success
//     }
//   }
// }
export class Validator {
  static present(res,data){
    if(!(data instanceof Object)){
      throw Error('格式错误')
    }
    let arr = []
    Object.keys(data).forEach(key => {
      if(!data[key]){
        arr.push(key)
      }
    })
    if(arr.length){
      return res.status(400).json(Result.validateFailed(`${arr.join(',')}校验失败,必须存在`))
    }else{
      return res.json({message:'ok'})
    }
  }
}