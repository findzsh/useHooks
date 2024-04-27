
// 加减乘除 精度处理
class Float {
    constructor() {

    }

    /*
    * 判断obj是否为一个整数
    */
    private isInteger = function (obj) {
        return Math.floor(obj) === obj;
    }

    /*
    * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
    * @param floatNum {number} 小数
    * @return {object}
    *   {times:100, num: 314}
    */
    private toInteger = function (floatNum: number) {
        var ret = { times: 1, num: 0 };
        if (this.isInteger(floatNum)) {
            ret.num = floatNum;
            return ret;
        }
        var strfi = floatNum + '';
        var dotPos = strfi.indexOf('.');
        var len = strfi.substr(dotPos + 1).length;
        var times = Math.pow(10, len);
        var intNum = parseInt(String(floatNum * times + 0.5), 10);
        ret.times = times;
        ret.num = intNum;
        return ret;
    }

    private operation = function (a, b, op) {
        var o1 = this.toInteger(a);
        var o2 = this.toInteger(b);
        var n1 = o1.num;
        var n2 = o2.num;
        var t1 = o1.times;
        var t2 = o2.times;
        var max = t1 > t2 ? t1 : t2;
        var result = null;
        switch (op) {
            case 'add':
                if (t1 === t2) {
                    // 两个小数位数相同
                    result = n1 + n2;
                } else if (t1 > t2) {
                    // o1 小数位 大于 o2
                    result = n1 + n2 * (t1 / t2);
                } else {
                    // o1 小数位 小于 o2
                    result = n1 * (t2 / t1) + n2;
                }
                return result / max;
            case 'subtract':
                if (t1 === t2) {
                    result = n1 - n2;
                } else if (t1 > t2) {
                    result = n1 - n2 * (t1 / t2);
                } else {
                    result = n1 * (t2 / t1) - n2;
                }
                return result / max;
            case 'multiply':
                result = (n1 * n2) / (t1 * t2);
                return result;
            case 'divide':
                result = (n1 * t2) / (n2 * t1);
                return result;
        }
    }

    // 加减乘除的四个接口
    add = function (a, b) {
        // 加
        return this.operation(a, b, 'add');
    }

    subtract = function (a, b) {
        // 减
        return this.operation(a, b, 'subtract');
    }

    multiply = function (a, b) {
        // 乘
        return this.operation(a, b, 'multiply');
    }

    divide = function (a, b) {
        // 除
        return this.operation(a, b, 'divide');
    }

}

const floatObj = new Float();

// 校验参数
const verifyParameters = function (parameters: (number | string)[], options?: { isMultiply?: boolean, isDivide?: boolean }) {
    let isZero = false;
    parameters.forEach((item, index) => {
        if (isNaN(Number(item))) {
            throw TypeError(`第${index + 1}项参数应为Number类型，却得到${item}，请确认参数`)
        }

        if (options?.isMultiply && Number(item) === 0) {
            isZero = true
        }

        if (options?.isDivide && Number(item) === 0) {
            if (index > 0) {
                throw RangeError(`进行除法运算时，第${index + 1}项参数不能为0，却得到${item}，请确认参数`)
            } else {
                isZero = true
            }
        }
    })

    if (options?.isDivide || options?.isMultiply) {
        return isZero
    }

}

const add = function (param1: number | string, param2: number | string, ...RemainingParameters: (number | string | void)[]) {
    let params = [...arguments]

    verifyParameters(params)

    return params.reduce((pre, item) => {
        return floatObj.add(pre, item)
    }, params.shift())
}

const subtract = function (param1: number | string, param2: number | string, ...RemainingParameters: (number | string | void)[]) {
    let params = [...arguments]

    verifyParameters(params)

    return params.reduce((pre, item) => {
        return floatObj.subtract(pre, item)
    }, params.shift())
}

const multiply = function (param1: number | string, param2: number | string, ...RemainingParameters: (number | string | void)[]) {
    let params = [...arguments]

    const hasZero = verifyParameters(params)

    if (hasZero) return 0

    return params.reduce((pre, item) => {
        return floatObj.multiply(pre, item)
    }, params.shift())
}

const divide = function (param1: number | string, param2: number | string, ...RemainingParameters: (number | string | void)[]) {
    let params = [...arguments]

    const isZero = verifyParameters(params)

    if (isZero) return 0

    return params.reduce((pre, item) => {
        return floatObj.divide(pre, item)
    }, params.shift())
}


const returns = {
    /**
  * 加法 - 传入两个至多个参数 所有参数项进行相加
  * @param {number | string} param1 - number|string 计算数1
  * @param {number | string} param2 - number|string 计算数2
  * @param {number | string | void} ?... - Remaining parameters 可传入多个计算数 number|string|void
  * @returns {number}
  * */
    add,
    /**
 * 减法 - 传入两个至多个参数 第一项参数减去后面所有项
  * @param {number | string} param1 - number|string 计算数1
  * @param {number | string} param2 - number|string 计算数2
  * @param {number | string | void} ?... - Remaining parameters 可传入多个计算数 number|string|void
  * @returns {number}
 * */
    subtract,
    /**
 * 乘法 - 传入两个至多个参数 所有参数项进行相乘
  * @param {number | string} param1 - number|string 计算数1
  * @param {number | string} param2 - number|string 计算数2
  * @param {number | string | void} ?... - Remaining parameters 可传入多个计算数 number|string|void
  * @returns {number}
 * */
    multiply,
    /**
 * 除法 - 传入两个至多个参数 第一项参数依次除以后面所有项
  * @param {number | string} param1 - number|string 计算数1
  * @param {number | string} param2 - number|string 计算数2
  * @param {number | string | void} ?... - Remaining parameters 可传入多个计算数 number|string|void
  * @returns {number}
 * */
    divide
}
export default returns