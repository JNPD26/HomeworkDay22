import ResponsiveAppBar from "../components/ResponsiveAppBar"
import OPPO_Find_N2_Flip from "../cards/OPPO_Find_N2_Flip"
import OPPO_Reno10_5G from "../cards/OPPO_Reno10_5G"
import SAMSUNG_Galaxy_Z_Flip4 from "../cards/SAMSUNG_Galaxy_Z_Flip4"
import SAMSUNG_Galaxy_Z_Fold4 from "../cards/SAMSUNG_Galaxy_Z_Fold4"
import HUAWEI_Mate_50_Pro from "../cards/HUAWEI_Mate_50_Pro"
import HUAWEI_P60_Pro from "../cards/HUAWEI_P60_Pro"
import Redmi_Note_12_Pro_5G from "../cards/Redmi_Note_12_Pro_5G"
import Xiaomi_13_Pro from "../cards/Xiaomi_13_Pro"
import Vivo_X90_Pro from "../cards/vivo_X90_Pro"

const Home = () => {
  return (
    <>
      <div className="navbar">
        <ResponsiveAppBar />
      </div>
      <div className="line1">
        <OPPO_Find_N2_Flip />
        <OPPO_Reno10_5G />
        <SAMSUNG_Galaxy_Z_Flip4 />
      </div>
      <div className="line2">
        <SAMSUNG_Galaxy_Z_Fold4 />
        <HUAWEI_Mate_50_Pro />
        <HUAWEI_P60_Pro />
      </div>
      <div className="line3">
        <Redmi_Note_12_Pro_5G />
        <Xiaomi_13_Pro />
        <Vivo_X90_Pro />
      </div>
    </>
  )
}

export default Home



