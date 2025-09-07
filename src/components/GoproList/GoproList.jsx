import { goProData } from "../../data/goproData"
import { GoproItem } from "../GoproItem/GoproItem"

export const GoproList = () => {
    console.log(goProData)
    return <ul>
        {goProData.map((goproInfo) => {
            return <GoproItem info={goproInfo} test="Test" />
        })}
    </ul>
}