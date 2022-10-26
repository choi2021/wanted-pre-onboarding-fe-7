export function AuthReducer(authState, action) {
  switch (action.type) {
    case 'change':
      const { name, value } = action;
      return {
        ...authState,
      };
  }
}
