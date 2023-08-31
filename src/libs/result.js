class BaseResult {
	constructor(code,msg){
		this.code = code
		this.msg = msg
	}
	static SUCCESS = new BaseResult(200,'成功')
	static FAILED = new BaseResult(500,'失败')
	static RECORD_NOT_FOUND = new BaseResult(500,'查无对应数据')
	static VALIDATE_FAILED = new BaseResult(400,'参数校验失败')
	static API_NOT_FOUND = new BaseResult(404,'接口不存在')
	static API_BUSY = new BaseResult(700,'操作过于频繁') 
}
export class Result {
	constructor(code, msg, data){
		this.code = code
		this.msg = msg
		this.data = data
	}
	static success(data){
		return new Result(BaseResult.SUCCESS.code,BaseResult.SUCCESS.msg,data)
	} 
	static failed(errData){
		return new Result(BaseResult.FAILED.code,BaseResult.FAILED.msg,JSON.parse(JSON.stringify(errData, Object.getOwnPropertyNames(errData), 2)))
	}
	static validateFailed(params){
		return new Result(BaseResult.VALIDATE_FAILED.code,BaseResult.VALIDATE_FAILED.msg,params)
	}
	static recordNotFound(data){
		return new Result(BaseResult.RECORD_NOT_FOUND.code,BaseResult.RECORD_NOT_FOUND.msg,data)
	}
}