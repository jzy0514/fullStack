import * as React from 'react';
import { connect } from "react-redux";
import { MembersPage } from "./page";
import { fectchMembersAction } from './actions/fetchMembers';

const mapStateToProps = (state) => ({
  members: state.members
});
const mapActionsToProps = (dispatch) => ({
  fetchMembers: () => dispatch(fectchMembersAction())
})

export const MembersPageContainer = connect(mapStateToProps, mapActionsToProps)(MembersPage);