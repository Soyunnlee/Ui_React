import { useState ,useEffect, memo, useCallback } from 'react';
import '../Css/Tabsection.css'
import axios from 'axios'

// Accordion Children Component
import Acoodionwrap from '../AccodionItm/AccodionWrap';
import Question from '../AccodionItm/Question';
import Answer from '../AccodionItm/Answer';

// Search Form 
import SearchInput from '../GuideComponent/SearchInput';
import SearchButton from '../GuideComponent/SearchButton';

// Btn
import MoreBtn from '../GuideComponent/MoreBtn';

// .env File
const router = process.env.REACT_APP_OPS_SERVER

// async 작성된 함수는 async로 호출해야한다.
// async 안에는 반드시 await으로 호출하는 메소드가 존재해야합니다.

let pageNum = 1
let pageCnt = 10
let status = true
let totalPageNum = 0


function AllSection(props) {
  const [noticeList, setNoticeList] = useState([]);

  const getData = async (str) => {
    if (str == null || str == undefined || str.length == 0) {
      str = ""
    }
    await axios.post(
      (`${router}/notice`), {
        searchKey : str,
        pageNum: pageNum,
      }
    ).then(res => {     
      // 버튼 상태 관리
      let result = res.data.data
      console.log("totalPageNum", totalPageNum)
      console.log("PageNum" , pageNum)
      if (pageNum == totalPageNum)
      {
        status = false
      } else {
        status = true
      }
      if (pageNum == 1) {
        setNoticeList(result);
      } else {
        setNoticeList(noticeList.concat(result)); 
      }
    })
  }


  const getTotalListCnt = async (str) => {
    await axios.post(
      (`${router}/notice/count`), {
        searchKey : str
      }
    ).then(res => {
      let result = res.data.data.cnt
      let total = Math.floor(result / 10)
      if (result % 10 == 0) {
        totalPageNum = total // 거짓일경우 실행 X 
      } else {
        totalPageNum = total + 1
      }
    console.log(result)
    })
}

  useEffect(() => {
    pageNum = 1;
    status = true; // 재렌더링 될때마다 pageNum , status 를 초기화 해준다.
    getTotalListCnt("") // page넘버를 먼저 가져와서 계산해야 함으로  getTotalListCnt 가 먼저 선언되어야한다.
    getData("");
  }, [])

 

  const moreNotice = () => {
    if (status === true) {
      pageNum += 1
      getData(filterString)
    }
  }

  // Search Form
  const [searchData, setSearchData] = useState('')
  const filterString = searchData

  const requestFilterData = useCallback(async (e) => {
    pageNum = 1
    status = true // Search Btn 을 누를때 마다 pageNum , status 를 초기화 해준다.
    await getTotalListCnt(filterString) // !!!! 여기 넣어줘야 검색했을때 버튼 status 가 먹힌다.
    await getData(filterString)
  }, [filterString])


  const handleChange = useCallback((event) => {
    setSearchData(event.target.value)
  }, [searchData])

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      requestFilterData();
    }
  }

  return (
    // 전체 질문페이지
    <section>      
      {/* Search Form */}

      <div class="tabSearchForm" >
      <SearchInput
        searchData={searchData}
        handleChange={handleChange}
        onKeyPress={onKeyPress}
      />
      <SearchButton requestFilterData={requestFilterData} />
      </div>

      <div class="border-b">
        {noticeList.map((val,key) => ( 
          <div class="accordionWrap">
          <Acoodionwrap>
            <div class="Question">
              <Question key={key}>
                  Q.&nbsp;&nbsp;{val.noticeTitle}
            </Question>
            </div>

            <Answer key={key}>
                <pre class="answerText">
                  {val.createdDttm}
                </pre>
            </Answer>
          </Acoodionwrap>
          </div>
        ))}
      </div>
      
    
      <MoreBtn moreNotice={moreNotice} status={status} />
   
  </section>
  );
}

export default memo(AllSection);