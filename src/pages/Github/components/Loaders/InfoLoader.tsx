import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={870}
    height={260}
    viewBox="0 0 870 260"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="10" y="35" rx="2" ry="2" width="870" height="280" />
  </ContentLoader>
)

export default InfoLoader