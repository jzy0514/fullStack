import { memberAPI } from "../../../api/member";
import { MemberEntity } from '../../../model/';

export const fectchMembersAction = () => (dispatch) => {
  // ajax api
  memberAPI.fetchMembers()
    .then(members =>{
      // 下一个动作
      dispatch(fectchMembersCompleted(members))
    })
}
// actions 返回一个type 对象， reducer重新计算， reducer = state + mutations 
const fectchMembersCompleted = (members:MemberEntity[]) => ({
  type: 'FETCH_MEMBER_COMPLETED',
  payaload: members
})