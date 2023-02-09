// 데이터 정제


export function ApiResponse(data) {
    if (data.isSuccess) {
        return data.data
    }
    else {
        return data.stateCode
    }
}

