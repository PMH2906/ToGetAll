import React from 'react'
import LandingPage from './LandingPage'

const index = () => {
  return (
    <div>
      <script type="text/javascript" src={"//dapi.kakao.com/v2/maps/sdk.js?appkey=" + process.env.REACT_APP_KAKAOMAP_API_KEY + "&libraries=services"}></script>
      <LandingPage />
    </div>
  )
}

export default index
