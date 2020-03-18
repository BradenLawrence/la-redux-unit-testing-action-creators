import {
  POST_GROCERY_REQUEST_SUCCESS,
  postGroceryRequestSuccess
} from '../../../app/javascript/src/modules/groceries'

describe('postGroceryRequestSuccess action', () => {
  it('should create an ADD_NEW_GROCERY action', () => {
    const grocery = { id: 1, name: 'banana' }
    const action = postGroceryRequestSuccess(grocery)
    expect(action).toEqual({
      type: POST_GROCERY_REQUEST_SUCCESS,
      grocery
    })
  }
}
