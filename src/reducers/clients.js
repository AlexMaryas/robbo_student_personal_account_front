import { handleActions } from 'redux-actions'

import {
    getClients, getClientsSuccess,
    getClientsFailed, clearClientsState,
    addParent, addParentSuccess,
    addParentFailed, deleteParentRequest,
    deleteParentSuccess, deleteParentFailed,
    createChildren, createChildreSuccess,
    createChildrenFailed,
    deleteChildRequest,
    deleteChildSuccess,
    deleteChildFailed,
} from '@/actions'

const INITIAL_STATE = {
    loading: false,
    parents: [],
}

export default handleActions({
    [getClients](state, action) {
        return { ...state, loading: true }
    },
    [getClientsSuccess](state, action) {
        return { ...state, loading: false, parents: action.payload.clients }
    },
    [getClientsFailed](state, action) {
        return { ...state, loading: false }
    },
    [clearClientsState](state, action) {
        return { ...state }
    },
    [addParent](state) {
        return { ...state, loading: true }
    },
    [addParentSuccess](state, action) {
        const { parent } = action.payload
        return {
            ...state,
            loading: false,
            parents: [...state.parents, { userHttp: { id: action.payload.response.parentId, ...parent }, children: [] }],
        }
    },
    [addParentFailed](state, action) {
        return { ...state, loading: false }
    },
    [deleteParentRequest](state) {
        return { ...state, loading: true }
    },
    [deleteParentSuccess](state, action) {
        const newParent = [...state.parents]
        newParent.splice(action.payload.parentIndex, 1)
        return { ...state, loading: false, parents: newParent }
    },
    [deleteParentFailed](state) {
        return { ...state, loading: false }
    },
    [createChildren](state) {
        return { ...state, loading: true }
    },
    [createChildreSuccess](state, action) {
        return { ...state, loading: false }
    },
    [createChildrenFailed](state, action) {
        return { ...state, loading: false }
    },
    [deleteChildRequest](state) {
        return { ...state, loading: true }
    },
    [deleteChildSuccess](state, action) {
        return { ...state, loading: false }
    },
    [deleteChildFailed](state, action) {
        return { ...state, loading: false }
    },
}, INITIAL_STATE)

export const getClientsState = state => state