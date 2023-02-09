import React from 'react';

const ApiModule = () => {

    const status = true

    const getData = async (str) => {
        if (str == null || str == undefined || str.length == 0) {
          str = ""
        }
            // 이부분!!!!! 
        await API.post(
          ('') , {
            searchKey : str,
            pageNum: pageNum,
          }
        ).then(res => {     
          // 버튼 상태 관리
          let result = res.data.data
          if (pageNum == totalPageNum)
          {
            status = false
          }
          if (pageNum == 1) {
            setNoticeList(result);
          } else {
            setNoticeList(noticeList.concat(result)); 
          }
        })
      }

    return (
        <div>
            
        </div>
    );
};

export default ApiModule;