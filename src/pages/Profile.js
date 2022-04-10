import { useCallback, useState } from "react"
import { changeVisible } from "../store/profile/actions"
import {changeVisibleCheck} from "../store/profile/actions"
import store from '../store'

const Profile = () => {
    const {showName, name} = store.getState()
    const dispatch = store.dispatch
    const [ername, setErmane] = useState()
    const setShowName = useCallback(() => {
        dispatch(changeVisible)
        setErmane({})
    }, [dispatch])
    //chekbox
    const dis = store.dispatch
    const setShowChek = useCallback(() => {
        dis(changeVisibleCheck)
    }, [dis]);

    
    return <div>Profile
        <button onClick={setShowName}>Show Name</button>

        <blockquote>
            {showName && <h3>{name}</h3>}
        </blockquote>
        {/* chekbox */}
        <div className="check">
            <p>initial</p>
            <input onClick={setShowChek} type='checkbox'/>
        </div>
    </div>
}
export default Profile